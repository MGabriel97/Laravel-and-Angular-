<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Images extends Model
{
    protected $fillable = ['user_name','user_email','user_password','user_domains','user_image',];
   // protected $fillable = ['user_name','user_image'];

}