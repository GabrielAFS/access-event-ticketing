import mockData from "@/constants/MOCK_DATA.json";

export class EventService {
  static async list() {
    return Promise.resolve(mockData);
  }
}
