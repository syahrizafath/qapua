<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\User;
use App\Role;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User;
        $user->name = 'Aldo Wildan';
        $user->email = 'aldowildan@mail.com';
        $user->password = bcrypt('password');
        $user->save();
        $user->roles()->attach(Role::where('name', 'user')->first());

        $admin = new User;
        $admin->name = 'Syahriza Fathurrahman';
        $admin->email = 'syahrizafath@mail.com';
        $admin->password = bcrypt('password');
        $admin->save();
        $admin->roles()->attach(Role::where('name', 'admin')->first());
    }
}
