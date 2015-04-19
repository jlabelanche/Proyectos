class CreateLaptops < ActiveRecord::Migration
  def change
    create_table :laptops do |t|
      t.string :brand
      t.text :model
      t.text :processor_brand
      t.string :ram
      t.string :price

      t.timestamps null: false
    end
  end
