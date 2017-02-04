/**
 * Created by appel on 2/2/2017.
 */


export class Issue {
  constructor(readonly body: string,
              readonly title: string,
              readonly user: string,
              readonly assignee: string ){}
}
