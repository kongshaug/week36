package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import dto.MovieDTO;
import entities.Movie;
import utils.EMF_Creator;
import facades.MovieFacade;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

//Todo Remove or change relevant parts before ACTUAL use
@Path("xxx")
public class Restmovies {

    private static final EntityManagerFactory EMF = EMF_Creator.createEntityManagerFactory(
                "pu",
                "jdbc:mysql://localhost:3307/startcode",
                "dev",
                "ax2",
                EMF_Creator.Strategy.CREATE);
    private static final MovieFacade FACADE =  MovieFacade.getFacadeExample(EMF);
    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();
    
    
            
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public String demo() {
        return "{\"msg\":\"Hello World\"}";
    }
    @Path("count")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public String getRenameMeCount() {
        long count = FACADE.getMoviesCount();
        //System.out.println("--------------->"+count);
        return "{\"count\":"+count+"}";  //Done manually so no need for a DTO
    }

    @POST
    @Consumes({MediaType.APPLICATION_JSON})
    public void create(Movie entity) {
        throw new UnsupportedOperationException();
    }
    
    @PUT
    @Path("/{id}")
    @Consumes({MediaType.APPLICATION_JSON})
    public void update(Movie entity, @PathParam("id") int id) {
        throw new UnsupportedOperationException();
    }
    
    @Path("/all")
    @GET
     @Produces({MediaType.APPLICATION_JSON})
    public String AllMovies() {
        
        List<Movie> movies =FACADE.getAll();
        List<MovieDTO> DTOm;
        DTOm = new ArrayList<MovieDTO>();
        for(Movie m : movies)
        {
        DTOm.add(new MovieDTO(m));
        }
        return GSON.toJson(DTOm);
    }
    // try fx. "NotArealMovie"
      @Path("/year/{name}")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public String getYear(@PathParam("name")String name) {
        int i = 0;
        try
        {
       i = FACADE.getYear(name);
        }finally 
        {
            
        }
      
       return "{\"year\":"+i+"}";
    }
    
     @Path("/pop")
    @GET
   
    public String populate() {
        
         EntityManager em = EMF.createEntityManager();
        try {
            em.getTransaction().begin();
           
            String[] actors = {"realman", "reallady","fakegoat"};
            String[] actorstwo = {"somecat", "Amonkey","somezebra"};
            em.createNamedQuery("Movie.deleteAllRows").executeUpdate();
            em.persist(new Movie(1995, "NotArealMovie", actors));
            em.persist(new Movie(444, "someMovie", actorstwo));
            

            em.getTransaction().commit();
        } finally {
            em.close();
        }
        return "dude it totally worked";
    }
 

}
