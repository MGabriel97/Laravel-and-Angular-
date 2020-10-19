<?php

namespace App\Http\Controllers;
use DB;

use Illuminate\Http\Request;
use App\Images;
use Illuminate\Support\Facades\Response;
use Image;

class StoreImageController extends Controller
{
  function index()
  {
   $data = Images::latest()->paginate(5);
   return view('store_image', compact('data'))
     ->with('i', (request()->input('page', 1) - 1) * 5);
  }

  function insert_image(Request $request)
  {
   

   $image_file = $request->user_image;

   $image = Image::make($image_file);

   Response::make($image->encode('jpeg'));

   $form_data = array(
    'user_name'  =>$request->user_name,
    'user_email'  => $request->user_email,
    'user_password'  => $request->user_password,
    'user_domains'  => $request->user_domains,

    'user_image' => $image
   );

   Images::create($form_data);

   return redirect()->back()->with('success', 'Image store in database successfully');
  }


  function fetch_image($image_id)
  {
   $image = Images::findOrFail($image_id);

   $image_file = Image::make($image->user_image);

   $response = Response::make($image_file->encode('jpeg'));

   $response->header('Content-Type', 'image/jpeg');

   return $response;
  }

  
    public function getprofiledata(Request $request){

        $getUserByEmail = DB::select('SELECT id,user_name,user_email,user_password,user_domains FROM images WHERE user_email = ?' ,[ $request->user_email]);

        return $getUserByEmail;
    }

      public function getdataimage($image_id){

        $image = Images::findOrFail($image_id);


        $image_file = Image::make($image->user_image);
        $response = Response::make($image_file->encode('jpeg'));
        $response->header('Content-Type', 'image/jpeg');
        return $response;
      }

   

      function insert_image_register(Request $request)
    {
     $form_data = array(
      'user_name'  =>$request->user_name,
      'user_email'  => $request->user_email,
      'user_password'  => $request->user_password,
      'user_domains'  => "",

      'user_image' => "image"
     );
     Images::create($form_data);
     return "Image1";
    }
    
    function updateprofilepage(Request $request)
    {
     $image_file = $request->user_image;

     $image = Image::make($image_file);

     Response::make($image->encode('jpeg'));

     $form_data = array(

      'user_name'  =>$request->user_name,
      'user_email'  => $request->user_email,
      'user_password'  => $request->user_password,
      'user_domains'  => $request->user_domains,

      'user_image' => $image
     );
     Images::select('user_id')->where('user_email', '=', $request->user_email)->update($form_data);
     return "Image12";
    }


    function updateprofilepagenoimage(Request $request)
    {
    

     $form_data = array(

      'user_name'  =>$request->user_name,
      'user_email'  => $request->user_email,
      'user_password'  => $request->user_password,
      'user_domains'  => $request->user_domains,

     );
     Images::select('user_id')->where('user_email', '=', $request->user_email)->update($form_data);
     return "Image12";
    }

    function insert_image12(Request $request)
    {
     $image_file = $request->user_image;

     $image = Image::make($image_file);

     Response::make($image->encode('jpeg'));

     $form_data = array(

      'user_name'  =>$request->user_name,
      'user_email'  => $request->user_email,
      'user_password'  => $request->user_password,
      'user_domains'  => $request->user_domains,

      'user_image' => $image
     );
     Images::select('user_id')->where('user_email', '=', 'roxin@yahoo.com')->update($form_data);
     return "Image12";
    }
}