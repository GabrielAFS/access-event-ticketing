import mockData from "@/constants/events_mock_data";

export class EventService {
  static async list() {
    return Promise.resolve(mockData);
  }
}
