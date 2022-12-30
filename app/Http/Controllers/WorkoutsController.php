<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Workout;
use Log;
use Exception;

class WorkoutsController extends Controller
{
    // Get workout list from database
    public function getWorkoutList(){
        try
        {
            $workouts = Workout::all();
            return response()->json($workouts);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }

     // Create workout to database
        public function createWorkout(Request $request){
            try
            {
                $validatedData = $request->validate([
                        'name' => 'nullable',
                        'description' => 'nullable',
                    ]);

                $workout = Workout::create([
                    'workout_name' => $validatedData['name'],
                    'workout_description' => $validatedData['description'],
                ]);
                return response()->json($workout);


//                 return Workout::create([
//                            'workout_name' => $data['name'],
//                            'workout_description' => $data['description'],
//                        ]);
            }
            catch(Exception $e)
            {
                Log::error($e);
            }
        }
}
