class Category < ApplicationRecord
  has_many :arts

  def to_s
    "#{category_name}"
  end
end
