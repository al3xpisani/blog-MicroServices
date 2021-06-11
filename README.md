# blog-MicroServices
microServices

Em uma arquitetura monolítica, todos os módulos são implementados em um único CODE BASE, e são publicados todos em uma única unidade.



Todas as funcionalidades abaixo são utilizadas por toda a aplicação



A arquitetura microservice contem todo o código necessário para fornecer uma
Funcionalidade do nosso app.





Abaixo, todos os componentes necessários como auth. Middleware, router e DB estão publicados em vários serviços.
Ex. NO serviço A, temos o auth. Middleware e router funcionando para gerar a Feature A. 
Se os outros serviços B,C e D falharem, o serviço A continuará respondendo e funcionando.







Data management means the way you store data inside a service and how you communicate data between different services.











If two different services tries to access the SAME DB and the DB crashes, both SERVICES WILL CRASHED AS WELL... 
THIS IS THE REASON EACH SERVICE NEEDS YOUR OWN DB.



Below, the SERVICE A MUST NOT ACCESS DB ON SERVICE B FOR A LOT OF Reasons. The DB B can change its schema or crashed...







EXAMPLES






Bellow, I add one more Service D, how I will acces the necessary information without access the another DBs on Services A,B and C ? 

Service D CANNOT access the another DBs on services A,B and C


SOME SOLUTIONS:




SERVICE D request access to service A,B or C to get data.





Pros and Cons



ASYNC
Event Bus receives a request from service D and sends this request to another Service that sends it back to event bus. Event bus gets this received request and sends back to the first service A.



A CRAZY WAY OF STORING DATA

The better approach here is to store on database of Service D only the information that answers the question of service D.
To store only the fields that service D will need ONLY and not have a full database table with all unnecessary fields.



Example : 

Request is to create a product.
Service B is requested to list all available products on DB.
Service B also sends a token to Event Bus telling that a product was created.
Event Bus sends this token to another services telling that theres na update.
Service D receives this token and updates only its DB with the necessary information.




Pros and cons 




Its worth to store data this way (duplicaton data). Only 14 dolars to store a hundred thousand million products on DB

![image](https://user-images.githubusercontent.com/14879580/121711089-9bb02800-cab0-11eb-82b6-0240b7144ca6.png)














Disavantages of SYNC
IN the sync solution below if the comments Service goes down, it breaks the whole process. 






![image](https://user-images.githubusercontent.com/14879580/121711147-a8cd1700-cab0-11eb-9f6e-4132909e414b.png)



We can use some technologies to implemnt EVENT BUS





Below, the post Service send na Event (data created) to Event Bus. 
The Event Bus gets this post event and sends it back to another services like comments and query to replicate this information.


![image](https://user-images.githubusercontent.com/14879580/121711177-b1255200-cab0-11eb-999f-9f66f1cc83ef.png)

Credits to Stephen Grider as well.

