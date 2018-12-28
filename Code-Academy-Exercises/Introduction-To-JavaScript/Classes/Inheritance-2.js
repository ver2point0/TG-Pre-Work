class HospitalEmployee {
	constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
		this._remainingVacationDays -= daysOff;
  }
}

// I created a parent class for subclasses to inherit properties and behaviors.
