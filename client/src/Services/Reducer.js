const initialValue = {
	Education: true,
	WorkHistory: false,
	ProgrammingSkill: false,
	Project: false,
	Interest: false
};

const Reducer = (state = initialValue, action) => {
	switch (action.type) {
		case "Education":
			return {
				Education: false,
				WorkHistory: false,
				ProgrammingSkill: false,
				Project: false,
				Interest: false
			};
		case "WorkHistory":
			return {
				Education: true,
				WorkHistory: true,
				ProgrammingSkill: false,
				Project: false,
				Interest: false
			};
		case "ProgrammingSkill":
			return {
				Education: true,
				WorkHistory: false,
				ProgrammingSkill: true,
				Project: false,
				Interest: false
			};
		case "Project":
			return {
				Education: true,
				WorkHistory: false,
				ProgrammingSkill: false,
				Project: true,
				Interest: false
			};
		case "Interest":
			return {
				Education: true,
				WorkHistory: false,
				ProgrammingSkill: false,
				Project: false,
				Interest: true
			};

		default:
			return false;
	}
};

export default Reducer;
