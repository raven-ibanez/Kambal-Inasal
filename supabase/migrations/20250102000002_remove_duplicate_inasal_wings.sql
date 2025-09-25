/*
  # Remove Duplicate Inasal Wings Items

  1. Clean Up
    - Delete all existing Inasal Wings items (both correct and incorrect ones)
    - Delete all variations for Inasal Wings
    - Re-add the correct Inasal Wings with proper pricing

  2. Fix Pricing
    - Base price: P70 (for Original)
    - Original variation: +P0 (total: P70)
    - Spicy variation: +P5 (total: P75)
*/

-- Delete all variations for Inasal Wings first (to avoid foreign key constraints)
DELETE FROM variations 
WHERE menu_item_id IN (
  SELECT id FROM menu_items WHERE name = 'Inasal Wings'
);

-- Delete all Inasal Wings items (both correct and incorrect duplicates)
DELETE FROM menu_items 
WHERE name = 'Inasal Wings';

-- Re-insert the correct Inasal Wings item
INSERT INTO menu_items (name, description, base_price, category, popular, available, image_url) VALUES
  ('Inasal Wings', 'Grilled chicken wings with original inasal marinade. Choose Original or Spicy', 70, 'inasal', true, true, 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800');

-- Add the correct variations for Inasal Wings
INSERT INTO variations (menu_item_id, name, price) 
SELECT id, 'Original', 0 FROM menu_items WHERE name = 'Inasal Wings';

INSERT INTO variations (menu_item_id, name, price) 
SELECT id, 'Spicy', 5 FROM menu_items WHERE name = 'Inasal Wings';
