<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');


Route::post('create','StudInsertController@insert');
Route::get('/main', 'MainController@index');
Route::post('/main/checklogin', 'MainController@checklogin');
Route::get('main/successlogin', 'MainController@successlogin');
Route::get('main/logout', 'MainController@logout');

Route::post('insertcomment','CommentController@insert');
Route::get('prim','CommentController@prim');
Route::get('getcomments','CommentController@getdata');

Route::get('getimage','StoreImageController@getdata');
Route::get('commentget/{category}', 'CommentController@commentget');

Route::post('insertuseronregister', 'StoreImageController@insert_image_register');
Route::post('insert1', 'StoreImageController@insert1');

Route::post('registerimage', 'StoreImageController@insert_image_register');
Route::get('image', 'StoreImageController@getdataimage');
Route::post('updateprofilepage', 'StoreImageController@updateprofilepage');

Route::post('updateprofilepagenoimage', 'StoreImageController@updateprofilepagenoimage');

Route::post('getprofiledata', 'StoreImageController@getprofiledata');
Route::get('getdataimage/{id}', 'StoreImageController@getdataimage');
