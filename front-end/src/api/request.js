import request from "./common";

// 获取单词列表
export function getWords(){
    return request(`/api/words`,'get')
}
