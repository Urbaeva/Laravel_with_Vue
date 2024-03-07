<?php

namespace App\Http\Controllers;

use App\Http\Requests\Person\StoreRequest;
use App\Models\Person;

class PersonController extends Controller
{
    public function index()
    {
        $persons = Person::all();
        return $persons;
    }

    public function create(StoreRequest $request)
    {
        $data = $request->validated();
        $person = Person::create($data);
        return $person;
    }

    public function update(StoreRequest $request, Person $person)
    {
        $data = $request->validated();
        $person->update($data);
        return $person;
    }

    public function delete(Person $person)
    {
        $person->delete();
        return response()->json([], 204);
    }
}
