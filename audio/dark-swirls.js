// https://hydra.ojack.xyz/?code=JTJGJTJGJTIwbGljZW5zZWQlMjB3aXRoJTIwQ0MlMjBCWS1OQy1TQSUyMDQuMCUyMGh0dHBzJTNBJTJGJTJGY3JlYXRpdmVjb21tb25zLm9yZyUyRmxpY2Vuc2VzJTJGYnktbmMtc2ElMkY0LjAlMkYlMEElMkYlMkZjb3JydXB0ZWQlMjBzY3JlZW5zYXZlciUwQSUyRiUyRmJ5JTIwUml0Y2hzZSUwQSUyRiUyRmluc3RhZ3JhbS5jb20lMkZyaXRjaHNlJTBBJTIwJTBBdm9yb25vaSgxMDAlMkMwLjUpJTBBJTIwJTIwJTA5Lm1vZHVsYXRlU2NhbGUob3NjKCkubW9kdWxhdGUobm9pc2UoMyklMkMoKSUzRCUzRWEuZmZ0JTVCMCU1RCkucm90YXRlKE1hdGguc2luKHRpbWUpKSUyQy41KSUwQSUyMCUyMCUwOS50aHJlc2goLjgpJTBBJTA5Lm1vZHVsYXRlUm90YXRlKG9zYyg3KSUyQygpJTNEJTNFYS5mZnQlNUIwJTVEKSUwQSUwOS50aHJlc2goLjcpJTBBJTIwJTIwJTA5LmRpZmYoc3JjKG8wKS5zY2FsZSg0LjgpKSUwQSUwOS5tb2R1bGF0ZVNjYWxlKG9zYygyKS5tb2R1bGF0ZVJvdGF0ZShvMCUyQy43NCkpJTBBJTA5LmRpZmYoc3JjKG8wKS5yb3RhdGUoJTVCLS4wMTIlMkMuMDElMkMtLjAwMiUyQzAlNUQpLnNjcm9sbFkoMCUyQyU1Qi0xJTJGMTk5ODAwJTJDMCU1RC5mYXN0KDAuNykpKSUwQSUwOS5icmlnaHRuZXNzKCU1Qi0uMDIlMkMtLjE3JTVELnNtb290aCgpLmZhc3QoLjUpKSUwQSUwOS5tb2R1bGF0ZShub2lzZSgxKSUyQygpJTNEJTNFYS5mZnQlNUIwJTVEKSUwQSUwOS5tb2R1bGF0ZVJlcGVhdFgobm9pc2UoMSklMkMoKSUzRCUzRWEuZmZ0JTVCMCU1RCklMEElMDkub3V0KCklMEE%3D
// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
//corrupted screensaver
//by Ritchse
//instagram.com/ritchse

voronoi(100,0.5)
  	.modulateScale(osc().modulate(noise(3),()=>a.fft[0]).rotate(Math.sin(time)),.5)
  	.thresh(.8)
	.modulateRotate(osc(7),()=>a.fft[0])
	.thresh(.7)
  	.diff(src(o0).scale(4.8))
	.modulateScale(osc(2).modulateRotate(o0,.74))
	.diff(src(o0).rotate([-.012,.01,-.002,0]).scrollY(0,[-1/199800,0].fast(0.7)))
	.brightness([-.02,-.17].smooth().fast(.5))
	.modulate(noise(1),()=>a.fft[0])
	.modulateRepeatX(noise(1),()=>a.fft[0])
	.out()
