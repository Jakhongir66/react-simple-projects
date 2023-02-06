import axios from "axios";

export default class ProductService {
   static async getAll() {
      const response = await axios.get('../../db.json');
      return response.data
   }
}
