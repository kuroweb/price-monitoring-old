class CreateJanparaProducts < ActiveRecord::Migration[7.1]
  def change
    create_table :janpara_products do |t|
      t.references :product, foreign_key: true

      t.string :janpara_id, null: false, index: { unique: true }
      t.string :name, null: false
      t.text :thumbnail_url, null: true
      t.integer :price, null: false, default: 0

      t.timestamps
    end

    add_index :janpara_products, %i[product_id janpara_id], unique: true
  end
end
