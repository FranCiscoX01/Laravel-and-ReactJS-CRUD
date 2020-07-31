<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel - React</title>

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <script src="https://kit.fontawesome.com/12bd546129.js" crossorigin="anonymous"></script>

    </head>
    <body>

        <div class="container">
          <div class="row">
            <div class="col-4 text-center">
              <img src="{{ asset('image/laravel.png') }}" height="100" width="100">
            </div>
            <div class="col-4 text-center">
              <h1 class="display-4">Laravel and ReactJS</h1>
            </div>
            <div class="col-4">
              <img src="{{ asset('image/react.png') }}" height="150" width="200">
            </div>
          </div>

          <TableAnimals id="table-animals"/>

        </div>

        <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>

    </body>
</html>
