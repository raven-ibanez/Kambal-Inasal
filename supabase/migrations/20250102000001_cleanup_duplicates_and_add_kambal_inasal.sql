/*
  # Clean Up Duplicates and Add Kambal Inasal Menu

  1. Clean Up
    - Delete all existing menu items to remove duplicates
    - Delete all existing variations and add-ons
    - Reset categories to only include Kambal Inasal categories

  2. Add Fresh Kambal Inasal Menu
    - Add proper categories for Kambal Inasal
    - Add all menu items with correct pricing
    - Add variations for Inasal Wings

  3. Features
    - Clean slate approach to avoid duplicates
    - Proper pricing structure for variations
    - High-quality food images
*/

-- Clean up all existing data
DELETE FROM variations;
DELETE FROM add_ons;
DELETE FROM menu_items;
DELETE FROM categories;

-- Add fresh categories for Kambal Inasal
INSERT INTO categories (id, name, icon, sort_order, active) VALUES
  ('krispy-kambal', 'Krispy Kambal', '🍗', 1, true),
  ('inasal', 'Kambal Inasal', '🔥', 2, true),
  ('sides', 'Sides & Add-ons', '🍟', 3, true),
  ('beverages', 'Beverages', '🥤', 4, true);

-- Insert Krispy Kambal Items
INSERT INTO menu_items (name, description, base_price, category, popular, available, image_url) VALUES
  ('BUY1TAKE1 Krispy Chicken Fillet', 'Crispy golden chicken fillet with tender meat inside. Includes 2 Chicken fillet and 2 Steamed rice', 175, 'krispy-kambal', true, true, 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Krispy Wings', 'Perfectly seasoned and crispy chicken wings. Includes 2 Fried wings and 2 Steamed rice', 109, 'krispy-kambal', true, true, 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Solo Meal', 'Single serving of our signature fried chicken. Includes 1 Fried chicken and 1 Steamed rice', 89, 'krispy-kambal', false, true, 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('BUY1TAKE1 Krispy Fried Chicken', 'Classic fried chicken with crispy coating and juicy meat. Buy 1 Take 1 offer', 169, 'krispy-kambal', true, true, 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('BUY1TAKE1 Krispy Pork', 'Crispy fried pork with golden coating. Buy 1 Take 1 offer', 170, 'krispy-kambal', true, true, 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=800');

-- Insert Kambal Inasal Items
INSERT INTO menu_items (name, description, base_price, category, popular, available, image_url) VALUES
  ('Inasal Bangus', 'Grilled milkfish marinated in traditional Filipino spices and served with rice', 199, 'inasal', true, true, 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Inasal Pork', 'Tender grilled pork marinated in special inasal sauce', 130, 'inasal', true, true, 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Inasal Wings', 'Grilled chicken wings with original inasal marinade. Choose Original or Spicy', 70, 'inasal', true, true, 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Pinaputok na Tilapia', 'Stuffed grilled tilapia with tomatoes, onions, and spices wrapped in banana leaves', 129, 'inasal', true, true, 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Inasal Chicken Burger', 'Grilled chicken breast in a soft bun with fresh vegetables and special sauce', 100, 'inasal', false, true, 'https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('B1T1 Chicken Inasal - Original', 'Traditional grilled chicken inasal. Includes Pecho & Hita and 2 Steamed Rice', 189, 'inasal', true, true, 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('B1T1 Chicken Inasal - Spicy', 'Spicy grilled chicken inasal with extra heat. Includes Pecho & Hita and 2 Steamed Rice', 195, 'inasal', true, true, 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800');

-- Insert Sides & Add-ons
INSERT INTO menu_items (name, description, base_price, category, popular, available, image_url) VALUES
  ('Krispy Fries', 'Golden crispy french fries seasoned to perfection', 49, 'sides', false, true, 'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Krispy Onion Rings', 'Crispy battered onion rings with a golden coating', 55, 'sides', false, true, 'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Krispy Chicken Burger', 'Crispy chicken patty in a soft bun with fresh vegetables', 100, 'sides', false, true, 'https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Krispy Kalabasa Chips', 'Crispy fried squash chips - a healthy alternative', 29, 'sides', false, true, 'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Krispy Talong', 'Crispy fried eggplant slices with special seasoning', 29, 'sides', false, true, 'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('ADD RICE', 'Additional steamed rice to complement your meal', 20, 'sides', false, true, 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800');

-- Insert Beverages
INSERT INTO menu_items (name, description, base_price, category, popular, available, image_url) VALUES
  ('Lemongrass Cooler', 'Refreshing lemongrass drink perfect for hot days', 25, 'beverages', false, true, 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Sagot Gulaman', 'Traditional Filipino jelly drink with brown sugar syrup', 25, 'beverages', false, true, 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800');

-- Add variations for Inasal Wings (Original uses base price, Spicy adds +5)
INSERT INTO variations (menu_item_id, name, price) 
SELECT id, 'Original', 0 FROM menu_items WHERE name = 'Inasal Wings';

INSERT INTO variations (menu_item_id, name, price) 
SELECT id, 'Spicy', 5 FROM menu_items WHERE name = 'Inasal Wings';
