"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { RiAddLine, RiEditLine, RiDeleteBinLine } from "react-icons/ri";

interface InternalPageData {
  id?: string;
  title: string;
  slug: string;
  description: string;
  type: "package" | "destination";
  isActive: boolean;
  sortOrder: number;
  metaTitle: string;
  metaDescription: string;
}

const emptyPage: InternalPageData = {
  title: "",
  slug: "",
  description: "",
  type: "package",
  isActive: true,
  sortOrder: 0,
  metaTitle: "",
  metaDescription: "",
};

export default function NavGroupsPage() {
  const [pages, setPages] = useState<InternalPageData[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [form, setForm] = useState<InternalPageData>(emptyPage);
  const [saving, setSaving] = useState(false);

  useEffect(() => { fetchPages(); }, []);

  async function fetchPages() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/internal-pages");
      const data = await res.json();
      setPages(data);
    } catch { toast.error("Failed to load nav groups"); }
    finally { setLoading(false); }
  }

  function openCreate() {
    setForm(emptyPage);
    setDialogOpen(true);
  }

  function openEdit(page: InternalPageData) {
    setForm({
      ...page,
      metaTitle: page.metaTitle || "",
      metaDescription: page.metaDescription || "",
    });
    setDialogOpen(true);
  }

  async function handleSave() {
    setSaving(true);
    try {
      const slug = form.slug || form.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      const payload = { ...form, slug };
      
      const isEdit = !!form.id;
      const url = isEdit ? `/api/admin/internal-pages/${form.id}` : "/api/admin/internal-pages";
      const res = await fetch(url, {
        method: isEdit ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        toast.success(isEdit ? "Group updated!" : "Group created!");
        setDialogOpen(false);
        fetchPages();
      } else {
        toast.error("Failed to save group");
      }
    } catch { toast.error("Error saving group"); }
    finally { setSaving(false); }
  }

  async function handleDelete() {
    if (!deleteId) return;
    try {
      const res = await fetch(`/api/admin/internal-pages/${deleteId}`, { method: "DELETE" });
      if (res.ok) {
        toast.success("Group deleted!");
        fetchPages();
      }
    } catch { toast.error("Failed to delete"); }
    finally { setDeleteId(null); }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Nav Groups</h1>
          <p className="text-muted-foreground mt-1">Manage dynamic internal pages for Navbar</p>
        </div>
        <Button onClick={openCreate} className="gap-2">
          <RiAddLine className="w-4 h-4" /> Add Group
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Order</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow><TableCell colSpan={6} className="text-center py-10 text-muted-foreground">Loading...</TableCell></TableRow>
              ) : pages.length === 0 ? (
                <TableRow><TableCell colSpan={6} className="text-center py-10 text-muted-foreground">No groups yet.</TableCell></TableRow>
              ) : (
                pages.map((page) => (
                  <TableRow key={page.id}>
                    <TableCell className="font-medium">{page.title}</TableCell>
                    <TableCell className="text-sm font-mono text-muted-foreground">{page.slug}</TableCell>
                    <TableCell className="capitalize"><Badge variant="outline">{page.type}</Badge></TableCell>
                    <TableCell>{page.sortOrder}</TableCell>
                    <TableCell>
                      {page.isActive ? <Badge variant="default">Active</Badge> : <Badge variant="secondary">Inactive</Badge>}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button variant="ghost" size="sm" onClick={() => openEdit(page)}><RiEditLine className="w-4 h-4" /></Button>
                        <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive" onClick={() => setDeleteId(page.id!)}><RiDeleteBinLine className="w-4 h-4" /></Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Sheet open={dialogOpen} onOpenChange={setDialogOpen}>
        <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
          <SheetHeader>
            <SheetTitle>{form.id ? "Edit Nav Group" : "Create Nav Group"}</SheetTitle>
            <SheetDescription>Configure how this group appears in the navbar and its landing page.</SheetDescription>
          </SheetHeader>
          <div className="py-6 space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label>Display Title *</Label>
                <Input value={form.title} onChange={(e) => setForm(f => ({ ...f, title: e.target.value }))} placeholder="e.g. Honeymoon Packages" />
              </div>
              <div className="space-y-2">
                <Label>Slug *</Label>
                <Input value={form.slug} onChange={(e) => setForm(f => ({ ...f, slug: e.target.value }))} placeholder="e.g. honeymoon" />
              </div>
              <div className="space-y-2">
                <Label>Type *</Label>
                <select 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={form.type} 
                  onChange={(e) => setForm(f => ({ ...f, type: e.target.value as any }))}
                >
                  <option value="package">Packages</option>
                  <option value="destination">Destinations</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label>Sort Order</Label>
                <Input type="number" value={form.sortOrder} onChange={(e) => setForm(f => ({ ...f, sortOrder: Number(e.target.value) }))} />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea value={form.description} onChange={(e) => setForm(f => ({ ...f, description: e.target.value }))} rows={3} placeholder="Intro text for the landing page..." />
              </div>
              <div className="flex items-center gap-2 pt-2">
                <Switch checked={form.isActive} onCheckedChange={v => setForm(f => ({ ...f, isActive: v }))} />
                <Label>Show in Navbar</Label>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t">
              <Label className="text-base font-semibold">SEO Meta Tags</Label>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-xs">Meta Title</Label>
                  <Input value={form.metaTitle} onChange={(e) => setForm(f => ({ ...f, metaTitle: e.target.value }))} placeholder="Custom SEO title" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Meta Description</Label>
                  <Textarea value={form.metaDescription} onChange={(e) => setForm(f => ({ ...f, metaDescription: e.target.value }))} rows={2} placeholder="SEO description" />
                </div>
              </div>
            </div>
          </div>
          <SheetFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSave} disabled={saving}>{saving ? "Saving..." : "Save Group"}</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Group?</AlertDialogTitle>
            <AlertDialogDescription>This will remove it from the Navbar. This action cannot be undone.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-white hover:bg-destructive/90">Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
