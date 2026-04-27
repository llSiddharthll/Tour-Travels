const { Client } = require('pg');
const fs = require('fs');
const path = require('fs');
require('dotenv').config();

async function backup() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });

  try {
    await client.connect();
    const tablesRes = await client.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'");
    const tables = tablesRes.rows.map(r => r.table_name);
    
    const backupData = {};

    for (const table of tables) {
      console.log(`Backing up table: ${table}...`);
      const dataRes = await client.query(`SELECT * FROM "${table}"`);
      backupData[table] = dataRes.rows;
    }

    const backupDir = './backups';
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir);
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const fileName = `db_backup_${timestamp}.json`;
    const filePath = `./backups/${fileName}`;

    fs.writeFileSync(filePath, JSON.stringify(backupData, null, 2));
    console.log(`Backup completed successfully: ${filePath}`);
    return filePath;
  } catch (err) {
    console.error('Backup failed:', err);
    throw err;
  } finally {
    await client.end();
  }
}

backup();
