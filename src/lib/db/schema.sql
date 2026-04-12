-- Initial Schema for Himachal Tour & Travels

-- 1. Tour Packages Table
CREATE TABLE IF NOT EXISTS tour_packages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    location TEXT NOT NULL,
    price_per_person INTEGER NOT NULL,
    duration_days INTEGER NOT NULL,
    duration_nights INTEGER NOT NULL,
    image_urls TEXT[] NOT NULL,
    vehicle_type TEXT NOT NULL,
    max_occupancy INTEGER NOT NULL,
    description TEXT NOT NULL,
    itinerary JSONB NOT NULL, -- Array of {day, title, activities}
    inclusions TEXT[] NOT NULL,
    exclusions TEXT[] NOT NULL,
    categories TEXT[] NOT NULL,
    is_featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Index for slug lookups (most common)
CREATE INDEX IF NOT EXISTS idx_packages_slug ON tour_packages(slug);

-- 3. Sample Data Insert (Optional, for reference)
-- INSERT INTO tour_packages (slug, title, location, price_per_person, duration_days, duration_nights, image_urls, vehicle_type, max_occupancy, description, itinerary, inclusions, exclusions, categories, is_featured)
-- VALUES ('spiti-valley-expedition', 'Spiti Valley Road Trip', 'Spiti Valley', 14999, 7, 6, ARRAY['/kasol.png', '/hero-spiti.png'], 'Tempo Traveller', 12, 'Embark on an unforgettable...', '[{"day": 1, "title": "...", "activities": "..."}]'::jsonb, ARRAY['...'], ARRAY['...'], ARRAY['adventure'], TRUE);
