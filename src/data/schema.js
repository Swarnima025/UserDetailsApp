const schema = {
    'title':'Create User Form',
    'type': 'object',
    'properties':
    {
      'Username':{
        'type':'string',
        'title': "Username",
        'default':'Chuck'
      },
      'firstName':{
        'type':'string',
        'title': "firstName",
        'default':'John'
      },
      'lastName':{
        'type':'string',
        'title': "lastName",
        'default':'Doe'
      },
      'phone':{
        'type':'string',
        'title': "Phone",
        'default':'+91',
        'minLength':10,
        'maxLength':10
      },
      'id':{
        'type':'number',
        'title':'Employee Code'
      },
      'Technology':{
        'type':'string',
        'title': "Technology",
        'enum':["Content","Tech","Finance","Marketing"]
      },
      'Designation':{
        'type':'string',
        'title': "Designation",
      },
      'birthDate':{
        'type':'string',
        'format':'date'
      },
      
      'gender':{
        'enum':['male','female']
      },
      
      'age':{
        'type':'integer'
      },
     
      'Pincode':{
        'type':'integer'
      },
      'university':{
        'type':'string',

      },
      'email':{
        'type':'string',

      },
      "image":{
        'enum':["https://robohash.org/facilisdignissimosdolore.png", 
      "https://robohash.org/consequunturautconsequatur.png",
      "https://robohash.org/adverovelit.png",
      "https://robohash.org/doloremquesintcorrupti.png"]
     
      }
    }
    }


  export default schema;