<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use DB;
use App\Http\Requests;
use App\Http\Controllers\Controller;
class CommentController extends Controller {

    public function prim(){

      return "as";
    }
    public function getdata(){

        $posts = DB::select('SELECT * FROM comments');
        return $posts;
      }


      public function commentget(Request $request){

        $getUserByEmail = DB::select('SELECT  * FROM comments WHERE category = ?' ,[ $request->category]);
        return $getUserByEmail;
      }

    public function insert(Request $request){
        $data =new \DateTime();
        $result  =$data->format('d/m/Y'); // for example

        $email = $request->input('email');
        $comment = $request->input('comment');
        $data=array("email"=>$email,"comment"=>$comment,"created_at"=> $result);
        if(DB::table('comments')->insert($data))
        {
            return "insert";
        }
        else
        {
            return "not insert";
        }
    }

}