class CreateArts < ActiveRecord::Migration[5.2]
  def change
    create_table :arts do |t|
      t.string :title
      t.text :description
      t.string :author
      t.integer :year
      t.string :photo
      t.references :district, foreign_key: true
      t.references :category, foreign_key: true

      t.timestamps
    end
  end
end
