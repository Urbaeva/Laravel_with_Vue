<?php

namespace App\Http\Controllers;

use App\Http\Requests\Person\StoreRequest;
use App\Http\Resources\Person\PersonResource;
use App\Models\Person;

class PersonController extends Controller
{
    public function index()
    {
        $persons = Person::all();
        return PersonResource::collection($persons);
    }

    public function create(StoreRequest $request)
    {
        $data = $request->validated();
        Person::create($data);
        return response([]);
    }

    public function update(StoreRequest $request, Person $person)
    {
        $data = $request->validated();
        $person->update($data);
        return response([]);
    }

    public function show(Person $person)
    {
        return new PersonResource($person);
    }

    public function delete(Person $person)
    {
        $person->delete();
        return response()->json([], 204);
    }
}
