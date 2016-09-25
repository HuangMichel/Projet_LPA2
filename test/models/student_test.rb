require 'test_helper'

class StudentTest < ActiveSupport::TestCase
  test "minor student" do
    titi= Student.find_by_name('titi')
    assert_equal titi.major?, false
  end
  
  test "major student" do
    bibi= Student.find_by_name('bibi')
    assert_equal bibi.major?, true
  end
end
