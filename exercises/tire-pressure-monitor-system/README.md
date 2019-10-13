# Racing Car Katas

Identify which SOLID principles are not being followed by the code. There is only one class you are interested in writing tests for right now. As a first step, try to get some kind of test in place before you change the class at all. If the tests are hard to write, is that because of the problems with SOLID principles?

When you have some kind of test to lean on, refactor the code and make it testable. Take care when refactoring not to alter the functionality, or change interfaces which other client code may rely on. (Imagine there is client code in another repository that you can't see right now). Add more tests to cover the functionality of the particular class you've been asked to get under test.

Apply the unit testing style and framework you are most comfortable with. You can choose to use stubs or mocks or none at all. If you do, you are free to use the mocking tool that you prefer.

## Tire Pressure Monitoring System exercise

Write the unit tests for the Alarm class. The Alarm class is designed to monitor tire pressure and set an alarm if the pressure falls outside of the expected range. The Sensor class provided for the exercise fakes the behaviour of a real tire sensor, providing random but realistic values.


## About this Kata
This kata originaly comes from https://github.com/emilybache/Racing-Car-Katas

