
// Marker Shaders

			
	 var fragment_shhBM =
	 
	 	`
			#ifdef GL_ES
			precision highp float;
			#endif

			uniform float percent;

			uniform sampler2D tOne;
			uniform sampler2D tSec;

			varying vec2 vUv;

			void main(void)

		{
    
    		vec3 c;
    		vec4 Ca = texture2D(tOne, ( vUv * 0.02 ) + 0.08 );
    		vec4 Cb = texture2D(tSec, ( vUv * 0.055 ) - 0.65 );
   		 	c = Ca.rgb * Ca.a + Cb.rgb * Cb.a * (1.00 - Ca.a);  
    		gl_FragColor = vec4(c, percent);
    		
		}	`
		
		;
			
		
	var fragment_shh =
	 	
		`
			#ifdef GL_ES       
			precision highp float;
			#endif

			uniform float percent;

			uniform sampler2D tOne;
			uniform sampler2D tSec;

			varying vec2 vUv;

			void main(void)

		{
    
    		vec3 c;
    		vec4 Ca = texture2D(tSec, ( vUv * 0.0295 ) - 0.12 );
    		vec4 Cb = texture2D(tOne, ( vUv * 0.0235 ) );
   		 	c = Ca.rgb * Ca.a + Cb.rgb * Cb.a * (1.22 - Ca.a);  
    		gl_FragColor = vec4(c, percent);
    		
		}	`
		
		;
		
		
	var vertex_shh =
		
		`
			varying vec2 vUv;
		
			void main()
			
			{
			
				vUv = uv;
				vec4 mvPosition = modelViewMatrix * vec4( position, 1 );
				gl_Position = projectionMatrix * mvPosition;
				
			}	`
			
		;
		
		

// Glow Shader
	
			
	 var glowFragmentShader =
	 
			"uniform vec3 glowColor;"+
			"varying float intensity;"+
			"void main()"+
		"{"+
			"vec3 glow = glowColor * intensity;"+
    		"gl_FragColor = vec4( glow, 1 );"+
    	
		"}"
		
	   ; 
	
	
	var glowVertexShader = 
	
			"uniform vec3 viewVector;"+
			"uniform float c;"+
			"uniform float p;"+
			"varying float intensity;"+
			"void main()"+
		"{"+
    		"vec3 vNormal = normalize( normalMatrix * normal );"+
			"vec3 vNormel = normalize( normalMatrix * viewVector );"+
			"intensity = pow( c - dot(vNormal, vNormel), p );"+
	
    		"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.3 );"+
    		
		"}"
		
		;
	
	
	
	
	
// Matrix Shader


	var matrixFragmentShader = 

			"uniform vec3 colour;"+
			"uniform float rows;"+
			"uniform float glow;"+
			"uniform float glowRadius;"+
			"uniform float charDetail;"+
			"uniform float speed;"+
			"uniform float iGlobalTime;"+
			"varying vec2 vUv;"+

		"float random(in float x){"+
		
    		"return fract(sin(x)*43758.5453);"+
    		
		"}"+

		"float random(in vec2 st){"+
   
   		 	"return fract(sin(dot(st.xy ,vec2(12.9898,78.233))) * 43758.5453);"+
   		 	
		"}"+

		"float randomChar(in vec2 outer,in vec2 inner){"+
		
   	 	"float grid = charDetail;"+
    	
    		"vec2 margin = vec2(.2,.05);"+
    		
    	"float seed = 23.;"+
    	
    		"vec2 borders = step(margin,inner)*step(margin,1.-inner);"+
    		
    		"return step(.5,random(outer*seed+floor(inner*grid))) * borders.x * borders.y;"+
    		
		"}"+

			"vec3 matrix(in vec2 st){"+
			"vec2 ipos = floor(st*rows)+vec2(1.,0.);"+

   			"ipos += vec2(.0,floor(iGlobalTime*speed*random(ipos.x)));"+

    		"vec2 fpos = fract(st*rows);"+
    		"vec2 center = (.5-fpos);"+

    		"float pct = random(ipos);"+
   			"float glowamount = (glowRadius-dot(center,center)*3.)*glow;"+

    		"return vec3(randomChar(ipos,fpos) * pct * glowamount) * colour;"+
    		
		"}"+

			"void main() {"+
			
   			 "gl_FragColor = vec4(matrix(vUv),1.0);"+
   		 	
		"}"
  
			
		;


	
	var matrixVertexShader =
	
		
		"varying vec2 vUv;"+

			"void main()"+
			
			"{"+
			
				"vUv = uv;"+
				"vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );"+
				"gl_Position = projectionMatrix * mvPosition;"+
				
			"}"
			
		;





	var matrixVertexShader2 =

	`
		
   	varying vec3 vPos;
    varying vec3 vNormal;
    void main() {
      vPos = (modelMatrix * vec4(position, 1.0 )).xyz;
      vNormal = normalMatrix * normal;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }
 
 	`
 	;
 	
 	
 	var matrixFragmentShader2 =

	`
	
    uniform vec3 diffuse;
	varying vec3 vPos;
	varying vec3 vNormal;

	struct PointLight {
 	 vec3 position;
 	 vec3 color;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];

	void main() {
	  vec4 addedLights = vec4(0.1, 0.1, 0.1, 1.0);
	  for(int l = 0; l < NUM_POINT_LIGHTS; l++) {
	    vec3 adjustedLight = pointLights[l].position + cameraPosition;
	    vec3 lightDirection = normalize(vPos - adjustedLight);
	    addedLights.rgb += clamp(dot(-lightDirection, vNormal), 0.0, 1.0) * pointLights[l].color;
	  }
	  gl_FragColor = addedLights * 0.8;
	}
    
    `
	;







// Odyssey Shader

/*
	
var odysseyShader = 

	
	`

		#ifdef GL_ES
precision mediump float;
#endif
 
 
uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;


#define iterations 14
#define formuparam2 0.79
 
#define volsteps 4
#define stepsize 0.290
 
#define zoom 0.900
#define tile   0.8
#define speed2  0.10
 
#define brightness 0.003
#define darkmatter 0.400
#define distfading 0.560
#define saturation 0.800


#define transverseSpeed zoom*2.0
#define cloud 0.11 



float triangle(float x, float a) 
{ 
    float output2 = 2.0*abs(  2.0*  ( (x/a) - floor( (x/a) + 0.5) ) ) - 1.0;
    return output2;
}
 
float field(in vec3 p) 
{    
    float strength = 7. + .03 * log(1.e-6 + fract(sin(time * 0.1) * 4373.11));
    float accum = 0.;
    float prev = 0.;
    float tw = 0.;    

    for (int i = 0; i < 6; ++i) {
        float mag = dot(p, p);
        p = abs(p) / mag + vec3(-.5, -.8 + 0.1*sin(time*0.1 + 2.0), -1.1+0.3*cos(time*0.05));
        float w = exp(-float(i) / 7.);
        accum += w * exp(-strength * pow(abs(mag - prev), 2.3));
        tw += w;
        prev = mag;
    }
    return max(0., 5. * accum / tw - .7);
}



void main() 
{   
    vec2 uv2 = 2. * gl_FragCoord.xy / vec2(512) - 1.;
    vec2 uvs = uv2 * vec2(127)  / 512.;
    
    float time2 = time;               
    float speed = speed2;
    speed = .01 * cos(0.02 + 3.1415926/4.0);
	float formuparam = formuparam2;
    
    vec2 uv = uvs;
    float a_xz = 0.9;
    float a_yz = -.6;
    float a_xy = 0.9 + 0.08;    
    
    mat2 rot_xz = mat2(cos(a_xz),sin(a_xz),-sin(a_xz),cos(a_xz));    
    mat2 rot_yz = mat2(cos(a_yz),sin(a_yz),-sin(a_yz),cos(a_yz));        
    mat2 rot_xy = mat2(cos(a_xy),sin(a_xy),-sin(a_xy),cos(a_xy));
    
    float v2 =1.0;    
    vec3 dir=vec3(uv*zoom,1.); 
    vec3 from=vec3(0.0, 0.0,0.0);                               
    from.x -= 5.0*(0.5);
    from.y -= 5.0*(0.5);
          
    vec3 forward = vec3(0.,0.,1.);   
    from.x += transverseSpeed*(1.0)*cos(0.01) + 0.001;
    from.y += transverseSpeed*(1.0)*sin(0.01) +0.001;
    from.z += 0.003;    
    
    dir.xy*=rot_xy;
    forward.xy *= rot_xy;
    dir.xz*=rot_xz;
    forward.xz *= rot_xz;    
    dir.yz*= rot_yz;
    forward.yz *= rot_yz;
    
    from.xy*=-rot_xy;
    from.xz*=rot_xz;
    from.yz*= rot_yz;
    
    float zooom = (time2-3311.)*speed;
    from += forward* zooom;
    float sampleShift = mod( zooom, stepsize );
     
    float zoffset = -sampleShift;
    sampleShift /= stepsize;
    
    float s=0.24;
    float s3 = s + stepsize/2.0;
    vec3 v=vec3(0.);
    float t3 = 0.0;    
    
    vec3 backCol2 = vec3(0.);
    for (int r=0; r<volsteps; r++) 
	{
        vec3 p2 = from + (s + zoffset) * dir;
        vec3 p3 = from + (s3 + zoffset) * dir;
        
        p2 = abs(vec3(tile) - mod(p2,vec3(tile*2.)));
        p3 = abs(vec3(tile) - mod(p3,vec3(tile*2.)));

        #ifdef cloud
        t3 = field(p3);
        #endif
        
        float pa, a = pa = 0.;
        for (int i=0; i<iterations; i++) 
		{
            p2 = abs(p2)/dot(p2,p2)-formuparam;
            float D = abs(length(p2)-pa);
            a += i > 7 ? min( 12., D) : D;
            pa=length(p2);
        }
        
        a*=a*a;
        float s1 = s+zoffset;
        float fade = pow(distfading,max(0.,float(r)-sampleShift));
        v+=fade;
        if( r == 0 )
		{
            fade *= (1. - (sampleShift));
		}
        if( r == volsteps-1 )
        {
            fade *= sampleShift;
        }
        
		v+=vec3(s1,s1*s1,s1*s1*s1*s1)*a*brightness*fade;
        
        backCol2 += mix(.4, 1., v2) * vec3(1.8 * t3 * t3 * t3, 1.4 * t3 * t3, t3) * fade;

        s+=stepsize;
        s3 += stepsize;        
    }
               
    v=mix(vec3(length(v)),v,saturation);

    vec4 forCol2 = vec4(v*.01, 1.);    
    #ifdef cloud
    backCol2 *= cloud;
    #endif    
    backCol2.b *= 2.8;
    backCol2.r *= 0.05;    
    
    backCol2.b = 0.5*mix(backCol2.g, backCol2.b, 0.8);
    backCol2.g = -0.;
    backCol2.bg = mix(backCol2.gb, backCol2.bg, 0.5*(cos(time*0.01) + 1.0));    
    gl_FragColor = forCol2 + vec4(backCol2, 1.0);
}

`

;


*/


	
	var vertexParticle =
	
	
	`

		uniform float time;
		attribute float customFrequency;
		attribute vec3 customColor;
		varying vec3 vColor;
		void main() 
	
		{
		
		vColor = customColor; // set color associated to vertex; use later in fragment shader
		vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );

		// option (1): draw particles at constant size on screen
		// gl_PointSize = size;
    	// option (2): scale particles as objects in 3D space
		gl_PointSize = (1.0 + sin( customFrequency * time )) * 20.0 * ( 300.0 / length( mvPosition.xyz ) );
		gl_Position = projectionMatrix * mvPosition;

	}
	
	`
	;
	
	
	var fragmentParticle =
	
	
	`
		
		uniform sampler2D texture;
		varying vec3 vColor; // colors associated to vertices; assigned by vertex shader
		void main() 
		
		{
	
		// calculates a color for the particle
		gl_FragColor = vec4( vColor, 1.0 );
		// sets particle texture to desired color
		gl_FragColor = gl_FragColor * texture2D( texture, gl_PointCoord );
		
	}

	`
	
;



			
			
			
			
			


// Tester Shaders



	var testerVertexShader = 
	
	
	`
	
	    varying vec3 vPos;
    varying vec3 vNormal;
    void main() {
      vPos = (modelMatrix * vec4(position, 1.0 )).xyz;
      vNormal = normalMatrix * normal;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }
	
	
	`
	
	;
	

	
	

	var testerFragmentShader = 

	`



uniform vec3 diffuse;
varying vec3 vPos;
varying vec3 vNormal;

struct PointLight {
  vec3 position;
  vec3 color;
};
uniform PointLight pointLights[ NUM_POINT_LIGHTS ];

void main() {
  vec4 addedLights = vec4(0.1, 0.1, 0.1, 1.0);
  for(int l = 0; l < NUM_POINT_LIGHTS; l++) {
    vec3 adjustedLight = pointLights[l].position + cameraPosition;
    vec3 lightDirection = normalize(vPos - adjustedLight);
    addedLights.rgb += clamp(dot(-lightDirection, vNormal), 0.0, 1.0) * pointLights[l].color;
  }
  gl_FragColor = addedLights;
}



	`

		
	
	;
	







		
		