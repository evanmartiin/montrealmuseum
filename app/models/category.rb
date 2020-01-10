class Category < ApplicationRecord
  has_many :art

  def to_s
    "#{category_name}"
  end
end
