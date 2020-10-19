<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Images extends Model
{
    protected $fillable = ['email','comment','created_at'];
   // protected $fillable = ['user_name','user_image'];

}