<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Animals extends Model
{
    protected $table = 'animals';
    protected $fillable = [
      'id', 'name', 'danger', 'category'
    ];
}
