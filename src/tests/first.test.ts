import axios from "axios";
import UserService from "../services/api/user";

jest.mock("axios");

const userSerivce = new UserService();

describe("jest", () => {
	it("test1", () => {
		const mockFn = jest.fn();

		mockFn();
		mockFn(1);
		mockFn("a");
		mockFn([1, 2], { a: "b" });

		mockFn.mockReturnValue("I am a mock!");
		console.log(mockFn());

		mockFn.mockResolvedValue("I will be a mock!"); // async

		mockFn().then((result: string) => {
			console.log(result);
		});

		mockFn.mockImplementation((name) => `I am ${name}!`);
		console.log(mockFn("LDY"));

		mockFn("a");
		mockFn(["b", "c"]);

		expect(mockFn).toHaveBeenCalledTimes(9);
		expect(mockFn).toHaveBeenCalledWith("a");
		expect(mockFn).toHaveBeenCalledWith(["b", "c"]);
	});

	it("test2", async () => {
		const calculator = {
			add: (a: number, b: number) => a + b,
		};

		const spyFn = jest.spyOn(calculator, "add");
		const result = calculator.add(2, 3);

		expect(spyFn).toHaveBeenCalledTimes(1);
		expect(spyFn).toHaveBeenCalledWith(2, 3);
		expect(result).toBe(5);
	});

	it("axios user", async () => {
		userSerivce.findOne = jest.fn().mockResolvedValue({
			data: {
				id: 1,
				name: "YY",
			},
		});

		const { data } = await userSerivce.findOne(1);
		expect(data).toHaveProperty("id", 1);
		expect(data).toHaveProperty("name", "YY");
	});

	it("axios user spyOn", async () => {
		const spyGet = jest.spyOn(userSerivce, "findOne");
		await userSerivce.findOne(1);
		expect(spyGet).toHaveBeenCalledTimes(2);
		expect(spyGet).toHaveBeenCalledWith(1);
	});
});
