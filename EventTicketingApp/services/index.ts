import mockData from "MOCK_DATA.json";

export class EventService {
  static async list() {
    return Promise.resolve(mockData);
  }
}
