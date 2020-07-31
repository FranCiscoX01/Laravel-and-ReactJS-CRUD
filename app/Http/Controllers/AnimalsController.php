<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Animals;

class AnimalsController extends Controller
{
    public function GetAnimals()
    {
      $data = Animals::all();
      return $data;
    }

    public function create(Request $request)
    {
      $this->validate($request, [
        'name' => 'required|max:255|min:2',
        'danger' => 'required|max:255|min:2',
        'category' => 'required|max:255|min:2'
      ]);
      try {
        $data = Animals::create([
          'name' => $request['name'],
          'danger' => $request['danger'],
          'category' => $request['category'],
        ]);
        if (!empty($data)) {
          return response()->json(['response' => 'success', 'comments' => 'Animal Registred']);
        } else {
          return response()->json(['response' => 'error', 'comments' => 'Animal No Registred']);
        }
      } catch (\Exception $e) {
        return response()->json(['response' => 'error', 'comments' => 'Error 505']);
      }

    }

    public function delete($id)
    {
      if (!empty($id)) {
        $animal = Animals::find($id);
        if (!empty($animal)) {
          $animal->delete();
          return response()->json(['response' => 'succes', 'comments' => 'Animal Deleted']);
        } else {
          return response()->json(['response' => 'error', 'comments' => 'Animal Not Found']);
        }
      } else {
        return response()->json(['response' => 'error', 'comments' => 'Error 505']);
      }
    }

    public function editAnimal($id)
    {
      if (!empty($id)) {
        $animal = Animals::find($id);
        if (!empty($animal)) {
          return $animal;
        } else {
          return response()->json(['response' => 'error', 'comments' => 'Animal Not Found']);
        }
      } else {
        return response()->json(['response' => 'error', 'comments' => 'Error 505']);
      }
    }

    public function update(Request $request, $id)
    {
      if (!empty($id)) {
        $animal = Animals::find($id);
        if (!empty($animal)) {
          $animal->name = $request['new_name'];
          $animal->danger = $request['new_danger'];
          $animal->category = $request['new_category'];
          $animal->save();
          return response()->json(['response' => 'succes', 'comments' => 'Animal Updated']);
        } else {
          return response()->json(['response' => 'error', 'comments' => 'Animal Not Found']);
        }
      } else {
        return response()->json(['response' => 'error', 'comments' => 'Error 505']);
      }
    }
}
