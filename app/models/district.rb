class District < ApplicationRecord
  has_many :arts

  def to_s
    "#{district_name}"
  end
end
