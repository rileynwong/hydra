// https://hydra.ojack.xyz/?code=c2hhcGUoMTAwJTJDJTIwMC4zNSUyQyUyMDAuMjUpJTBBb3NjKDQwJTJDJTIwMC4xJTJDJTIwMSklMEElMDkuaHVlKCgpJTNEJTNFYS5mZnQlNUIwJTVEKSUwQSUwOS5odWUoKCklMjAlM0QlM0UlMjBNYXRoLnNpbih0aW1lKSklMEElMDkubW9kdWxhdGUobm9pc2UoMSUyQyUyMDApJTJDJTIwMC41KSUwQSUwOS5tb2R1bGF0ZVJvdGF0ZShvc2MoMjAlMkMlMjAwKSUwQSUwOSUwOS5rYWxlaWQoMTAwKSUyQyUyMDQpJTBBJTA5Lm1vZHVsYXRlSHVlKG8xJTJDJTIwKCklM0QlM0VhLmZmdCU1QjAlNUQpJTBBJTA5LmJsZW5kKG8wJTJDJTIwMC4wMyklMEElMDkub3V0KG8wKQ%3D%3D
//
shape(100, 0.35, 0.25)
osc(40, 0.1, 1)
	.hue(()=>a.fft[0])
	.hue(() => Math.sin(time))
	.modulate(noise(1, 0), 0.5)
	.modulateRotate(osc(20, 0)
		.kaleid(100), 4)
	.modulateHue(o1, ()=>a.fft[0])
	.blend(o0, 0.03)
	.out(o0)
