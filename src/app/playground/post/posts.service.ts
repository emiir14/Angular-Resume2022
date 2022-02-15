import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map, take, exhaustMap } from "rxjs/operators";
import { AuthService } from "src/app/auth/auth.service";

import { Post } from "./post.model";

@Injectable({providedIn: 'root'})
export class PostsService {
    error = new Subject<string>();

    constructor(private http: HttpClient, private authService: AuthService) {}
    createAndStorePost(title: string, content: string) {
        const postData: Post = { title: title, content: content };
        return this.http
            .post<{ name: string }>(
                'https://resume-app-login-default-rtdb.firebaseio.com/posts.json',
                postData
            );
    }
    
    fetchPosts() {
        return this.http
        .get<{ [key: string]: Post }>(
            'https://resume-app-login-default-rtdb.firebaseio.com/posts.json'
            )
            .pipe(
                map(responseData => { 
                    const postsArray: Post[] = [];
                    for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                    postsArray.push({ ...responseData[key], id: key });
                }     
            }
            return postsArray;
            })
        );
    }

    deletePosts() {
        return this.http.delete('https://resume-app-login-default-rtdb.firebaseio.com/posts.json')
    }
}