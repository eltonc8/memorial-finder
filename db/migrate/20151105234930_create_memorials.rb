class CreateMemorials < ActiveRecord::Migration
  def change
    create_table :memorials do |t|

      t.timestamps null: false
    end
  end
end
