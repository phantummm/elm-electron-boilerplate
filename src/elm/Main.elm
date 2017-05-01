module Main exposing (..)

import Html exposing (..)


main : Program Never Model Msg
main =
    Html.program
        { init = init
        , view = view
        , update = update
        , subscriptions = (\_ -> Sub.none)
        }



-- INIT


init : ( Model, Cmd Msg )
init =
    ( 0, Cmd.none )



-- MODEL


type alias Model =
    Int



-- UPDATE


type Msg
    = NoOp


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )



-- VIEW


view : Model -> Html msg
view model =
    div []
        [ h1 [] [ text "elm-electron-boilerplate" ]
        ]
