class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string(:username)
      t.string(:password_digest)
      t.string(:adress)
      t.string(:first_name)
      t.string(:last_name)
      t.string(:email)
      t.string(:introduction)
      t.string(:current_role)
      t.string(:high_school)
      t.string(:degree)
    end
  end
end