import { IComment } from "@/contexts/@commentTypes"


export const getAverageScore = (comments: IComment[]) => {    
    if (comments.length > 0){
      const totalScore = comments.reduce((a, c) => a + c.rating, 0);
      return Math.ceil((totalScore / comments.length));
    } else {
      return 10;
    };
}