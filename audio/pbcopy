// https://hydra.ojack.xyz/?code=JTJGJTJGJTIwbGljZW5zZWQlMjB3aXRoJTIwQ0MlMjBCWS1OQy1TQSUyMDQuMCUyMGh0dHBzJTNBJTJGJTJGY3JlYXRpdmVjb21tb25zLm9yZyUyRmxpY2Vuc2VzJTJGYnktbmMtc2ElMkY0LjAlMkYlMEElMkYlMkZjb3JydXB0ZWQlMjBzY3JlZW5zYXZlciUwQSUyRiUyRmJ5JTIwUml0Y2hzZSUwQSUyRiUyRmluc3RhZ3JhbS5jb20lMkZyaXRjaHNlJTBBJTIwJTBBdm9yb25vaSgzNTAlMkMwLjE1KSUwQSUyMCUyMCUwOS5tb2R1bGF0ZVNjYWxlKG9zYyg4KS5yb3RhdGUoTWF0aC5zaW4odGltZSkpJTJDLjUpJTBBJTIwJTIwJTA5LnRocmVzaCguOCklMEElMDkubW9kdWxhdGVSb3RhdGUob3NjKDcpJTJDLjQpJTBBJTA5LnRocmVzaCguNyklMEElMjAlMjAlMDkuZGlmZihzcmMobzApLnNjYWxlKDEuOCkpJTBBJTA5Lm1vZHVsYXRlU2NhbGUob3NjKDIpLm1vZHVsYXRlUm90YXRlKG8wJTJDLjc0KSklMEElMDkuZGlmZihzcmMobzApLnJvdGF0ZSglNUItLjAxMiUyQy4wMSUyQy0uMDAyJTJDMCU1RCkuc2Nyb2xsWSgwJTJDJTVCLTElMkYxOTk4MDAlMkMwJTVELmZhc3QoMC43KSkpJTBBJTA5LmJyaWdodG5lc3MoJTVCLS4wMiUyQy0uMTclNUQuc21vb3RoKCkuZmFzdCguNSkpJTBBJTA5Lm1vZHVsYXRlKG5vaXNlKDEpJTJDKCklM0QlM0VhLmZmdCU1QjAlNUQpJTBBJTA5Lm91dCgpJTBB
//
// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
//corrupted screensaver
//by Ritchse
//instagram.com/ritchse

voronoi(350,0.15)
  	.modulateScale(osc(8).rotate(Math.sin(time)),.5)
  	.thresh(.8)
	.modulateRotate(osc(7),.4)
	.thresh(.7)
  	.diff(src(o0).scale(1.8))
	.modulateScale(osc(2).modulateRotate(o0,.74))
	.diff(src(o0).rotate([-.012,.01,-.002,0]).scrollY(0,[-1/199800,0].fast(0.7)))
	.brightness([-.02,-.17].smooth().fast(.5))
	.modulate(noise(1),()=>a.fft[0])
	.out()
