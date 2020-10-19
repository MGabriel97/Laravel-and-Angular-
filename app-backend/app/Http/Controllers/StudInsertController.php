<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use DB;
use App\Http\Requests;
use App\Http\Controllers\Controller;
class StudInsertController extends Controller {



public function insertform(){

return view('stud_create');

}


public function insert(Request $request){

    $name = $request->input('name');
    $password = $request->input('password');
    $email = $request->input('email');
    $remember_token=str_random(60);
    $data=array('name'=>$name,"password"=>\Hash::make($password),"email"=>$email,"remember_token"=>$remember_token);
    DB::table('users')->insert($data);
    $dataimage=array('user_name'=>$name,"user_email"=>$email,"user_password"=>$password,"user_domains"=>"","user_image"=>NULL);
    DB::table('images')->insert($dataimage);

}
}