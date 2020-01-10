class District < ApplicationRecord
  has_many :art

  def to_s
    "#{district_name}"
  end
end
