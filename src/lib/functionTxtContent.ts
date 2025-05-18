
export const functionTxt = `ret2where:     file format elf64-x86-64


Disassembly of section .interp:

0000000000400318 <.interp>:
  400318:	2f                   	(bad)
  400319:	6c                   	insb   (%dx),%es:(%rdi)
  40031a:	69 62 36 34 2f 6c 64 	imul   $0x646c2f34,0x36(%rdx),%esp
  400321:	2d 6c 69 6e 75       	sub    $0x756e696c,%eax
  400326:	78 2d                	js     400355 <__abi_tag-0x27>
  400328:	78 38                	js     400362 <__abi_tag-0x1a>
  40032a:	36 2d 36 34 2e 73    	ss sub $0x732e3436,%eax
  400330:	6f                   	outsl  %ds:(%rsi),(%dx)
  400331:	2e 32 00             	cs xor (%rax),%al

Disassembly of section .note.gnu.property:

0000000000400338 <.note.gnu.property>:
  400338:	04 00                	add    $0x0,%al
  40033a:	00 00                	add    %al,(%rax)
  40033c:	10 00                	adc    %al,(%rax)
  40033e:	00 00                	add    %al,(%rax)
  400340:	05 00 00 00 47       	add    $0x47000000,%eax
  400345:	4e 55                	rex.WRX push %rbp
  400347:	00 02                	add    %al,(%rdx)
  400349:	80 00 c0             	addb   $0xc0,(%rax)
  40034c:	04 00                	add    $0x0,%al
  40034e:	00 00                	add    %al,(%rax)
  400350:	01 00                	add    %eax,(%rax)
  400352:	00 00                	add    %al,(%rax)
  400354:	00 00                	add    %al,(%rax)
	...

Disassembly of section .note.gnu.build-id:

0000000000400358 <.note.gnu.build-id>:
  400358:	04 00                	add    $0x0,%al
  40035a:	00 00                	add    %al,(%rax)
  40035c:	14 00                	adc    $0x0,%al
  40035e:	00 00                	add    %al,(%rax)
  400360:	03 00                	add    (%rax),%eax
  400362:	00 00                	add    %al,(%rax)
  400364:	47                   	rex.RXB
  400365:	4e 55                	rex.WRX push %rbp
  400367:	00 f3                	add    %dh,%bl
  400369:	2a 23                	sub    (%rbx),%ah
  40036b:	1e                   	(bad)
  40036c:	74 d7                	je     400345 <__abi_tag-0x37>
  40036e:	7a 04                	jp     400374 <__abi_tag-0x8>
  400370:	df 23                	fbld   (%rbx)
  400372:	b9 f1 9a dc e3       	mov    $0xe3dc9af1,%ecx
  400377:	98                   	cwtl
  400378:	87 61 b8             	xchg   %esp,-0x48(%rcx)
  40037b:	36                   	ss

Disassembly of section .note.ABI-tag:

000000000040037c <__abi_tag>:
  40037c:	04 00                	add    $0x0,%al
  40037e:	00 00                	add    %al,(%rax)
  400380:	10 00                	adc    %al,(%rax)
  400382:	00 00                	add    %al,(%rax)
  400384:	01 00                	add    %eax,(%rax)
  400386:	00 00                	add    %al,(%rax)
  400388:	47                   	rex.RXB
  400389:	4e 55                	rex.WRX push %rbp
  40038b:	00 00                	add    %al,(%rax)
  40038d:	00 00                	add    %al,(%rax)
  40038f:	00 03                	add    %al,(%rbx)
  400391:	00 00                	add    %al,(%rax)
  400393:	00 02                	add    %al,(%rdx)
  400395:	00 00                	add    %al,(%rax)
  400397:	00 00                	add    %al,(%rax)
  400399:	00 00                	add    %al,(%rax)
	...

Disassembly of section .gnu.hash:

00000000004003a0 <.gnu.hash>:
  4003a0:	02 00                	add    (%rax),%al
  4003a2:	00 00                	add    %al,(%rax)
  4003a4:	07                   	(bad)
  4003a5:	00 00                	add    %al,(%rax)
  4003a7:	00 01                	add    %al,(%rcx)
  4003a9:	00 00                	add    %al,(%rax)
  4003ab:	00 06                	add    %al,(%rsi)
  4003ad:	00 00                	add    %al,(%rax)
  4003af:	00 00                	add    %al,(%rax)
  4003b1:	00 20                	add    %ah,(%rax)
  4003b3:	00 80 01 10 00 07    	add    %al,0x7001001(%rax)
  4003b9:	00 00                	add    %al,(%rax)
  4003bb:	00 08                	add    %cl,(%rax)
  4003bd:	00 00                	add    %al,(%rax)
  4003bf:	00 29                	add    %ch,(%rcx)
  4003c1:	1d 8c 1c 67 55       	sbb    $0x55671c8c,%eax
  4003c6:	61                   	(bad)
  4003c7:	10                   	.byte 0x10

Disassembly of section .dynsym:

00000000004003c8 <.dynsym>:
	...
  4003e0:	20 00                	and    %al,(%rax)
  4003e2:	00 00                	add    %al,(%rax)
  4003e4:	12 00                	adc    (%rax),%al
	...
  4003f6:	00 00                	add    %al,(%rax)
  4003f8:	0f 00 00             	sldt   (%rax)
  4003fb:	00 12                	add    %dl,(%rdx)
	...
  40040d:	00 00                	add    %al,(%rax)
  40040f:	00 32                	add    %dh,(%rdx)
  400411:	00 00                	add    %al,(%rax)
  400413:	00 12                	add    %dl,(%rdx)
	...
  400425:	00 00                	add    %al,(%rax)
  400427:	00 5a 00             	add    %bl,0x0(%rdx)
  40042a:	00 00                	add    %al,(%rax)
  40042c:	20 00                	and    %al,(%rax)
	...
  40043e:	00 00                	add    %al,(%rax)
  400440:	14 00                	adc    $0x0,%al
  400442:	00 00                	add    %al,(%rax)
  400444:	12 00                	adc    (%rax),%al
	...
  400456:	00 00                	add    %al,(%rax)
  400458:	01 00                	add    %eax,(%rax)
  40045a:	00 00                	add    %al,(%rax)
  40045c:	12 00                	adc    (%rax),%al
	...
  40046e:	00 00                	add    %al,(%rax)
  400470:	19 00                	sbb    %eax,(%rax)
  400472:	00 00                	add    %al,(%rax)
  400474:	11 00                	adc    %eax,(%rax)
  400476:	19 00                	sbb    %eax,(%rax)
  400478:	50                   	push   %rax
  400479:	40                   	rex
  40047a:	40 00 00             	rex add %al,(%rax)
  40047d:	00 00                	add    %al,(%rax)
  40047f:	00 08                	add    %cl,(%rax)
  400481:	00 00                	add    %al,(%rax)
  400483:	00 00                	add    %al,(%rax)
  400485:	00 00                	add    %al,(%rax)
  400487:	00 09                	add    %cl,(%rcx)
  400489:	00 00                	add    %al,(%rax)
  40048b:	00 11                	add    %dl,(%rcx)
  40048d:	00 19                	add    %bl,(%rcx)
  40048f:	00 60 40             	add    %ah,0x40(%rax)
  400492:	40 00 00             	rex add %al,(%rax)
  400495:	00 00                	add    %al,(%rax)
  400497:	00 08                	add    %cl,(%rax)
  400499:	00 00                	add    %al,(%rax)
  40049b:	00 00                	add    %al,(%rax)
  40049d:	00 00                	add    %al,(%rax)
	...

Disassembly of section .dynstr:

00000000004004a0 <.dynstr>:
  4004a0:	00 73 65             	add    %dh,0x65(%rbx)
  4004a3:	74 76                	je     40051b <__abi_tag+0x19f>
  4004a5:	62 75 66 00 73       	(bad)
  4004aa:	74 64                	je     400510 <__abi_tag+0x194>
  4004ac:	69 6e 00 70 75 74 73 	imul   $0x73747570,0x0(%rsi),%ebp
  4004b3:	00 67 65             	add    %ah,0x65(%rdi)
  4004b6:	74 73                	je     40052b <__abi_tag+0x1af>
  4004b8:	00 73 74             	add    %dh,0x74(%rbx)
  4004bb:	64 6f                	outsl  %fs:(%rsi),(%dx)
  4004bd:	75 74                	jne    400533 <__abi_tag+0x1b7>
  4004bf:	00 5f 5f             	add    %bl,0x5f(%rdi)
  4004c2:	6c                   	insb   (%dx),%es:(%rdi)
  4004c3:	69 62 63 5f 73 74 61 	imul   $0x6174735f,0x63(%rdx),%esp
  4004ca:	72 74                	jb     400540 <__abi_tag+0x1c4>
  4004cc:	5f                   	pop    %rdi
  4004cd:	6d                   	insl   (%dx),%es:(%rdi)
  4004ce:	61                   	(bad)
  4004cf:	69 6e 00 70 72 69 6e 	imul   $0x6e697270,0x0(%rsi),%ebp
  4004d6:	74 66                	je     40053e <__abi_tag+0x1c2>
  4004d8:	00 6c 69 62          	add    %ch,0x62(%rcx,%rbp,2)
  4004dc:	63 2e                	movsxd (%rsi),%ebp
  4004de:	73 6f                	jae    40054f <__abi_tag+0x1d3>
  4004e0:	2e 36 00 47 4c       	cs ss add %al,0x4c(%rdi)
  4004e5:	49                   	rex.WB
  4004e6:	42                   	rex.X
  4004e7:	43 5f                	rex.XB pop %r15
  4004e9:	32 2e                	xor    (%rsi),%ch
  4004eb:	32 2e                	xor    (%rsi),%ch
  4004ed:	35 00 47 4c 49       	xor    $0x494c4700,%eax
  4004f2:	42                   	rex.X
  4004f3:	43 5f                	rex.XB pop %r15
  4004f5:	32 2e                	xor    (%rsi),%ch
  4004f7:	33 34 00             	xor    (%rax,%rax,1),%esi
  4004fa:	5f                   	pop    %rdi
  4004fb:	5f                   	pop    %rdi
  4004fc:	67 6d                	insl   (%dx),%es:(%edi)
  4004fe:	6f                   	outsl  %ds:(%rsi),(%dx)
  4004ff:	6e                   	outsb  %ds:(%rsi),(%dx)
  400500:	5f                   	pop    %rdi
  400501:	73 74                	jae    400577 <__abi_tag+0x1fb>
  400503:	61                   	(bad)
  400504:	72 74                	jb     40057a <__abi_tag+0x1fe>
  400506:	5f                   	pop    %rdi
  400507:	5f                   	pop    %rdi
	...

Disassembly of section .gnu.version:

000000000040050a <.gnu.version>:
  40050a:	00 00                	add    %al,(%rax)
  40050c:	02 00                	add    (%rax),%al
  40050e:	03 00                	add    (%rax),%eax
  400510:	03 00                	add    (%rax),%eax
  400512:	01 00                	add    %eax,(%rax)
  400514:	03 00                	add    (%rax),%eax
  400516:	03 00                	add    (%rax),%eax
  400518:	03 00                	add    (%rax),%eax
  40051a:	03 00                	add    (%rax),%eax

Disassembly of section .gnu.version_r:

0000000000400520 <.gnu.version_r>:
  400520:	01 00                	add    %eax,(%rax)
  400522:	02 00                	add    (%rax),%al
  400524:	39 00                	cmp    %eax,(%rax)
  400526:	00 00                	add    %al,(%rax)
  400528:	10 00                	adc    %al,(%rax)
  40052a:	00 00                	add    %al,(%rax)
  40052c:	00 00                	add    %al,(%rax)
  40052e:	00 00                	add    %al,(%rax)
  400530:	75 1a                	jne    40054c <__abi_tag+0x1d0>
  400532:	69 09 00 00 03 00    	imul   $0x30000,(%rcx),%ecx
  400538:	43 00 00             	rex.XB add %al,(%r8)
  40053b:	00 10                	add    %dl,(%rax)
  40053d:	00 00                	add    %al,(%rax)
  40053f:	00 b4 91 96 06 00 00 	add    %dh,0x696(%rcx,%rdx,4)
  400546:	02 00                	add    (%rax),%al
  400548:	4f 00 00             	rex.WRXB add %r8b,(%r8)
  40054b:	00 00                	add    %al,(%rax)
  40054d:	00 00                	add    %al,(%rax)
	...

Disassembly of section .rela.dyn:

0000000000400550 <.rela.dyn>:
  400550:	d8 3f                	fdivrs (%rdi)
  400552:	40 00 00             	rex add %al,(%rax)
  400555:	00 00                	add    %al,(%rax)
  400557:	00 06                	add    %al,(%rsi)
  400559:	00 00                	add    %al,(%rax)
  40055b:	00 01                	add    %al,(%rcx)
	...
  400565:	00 00                	add    %al,(%rax)
  400567:	00 e0                	add    %ah,%al
  400569:	3f                   	(bad)
  40056a:	40 00 00             	rex add %al,(%rax)
  40056d:	00 00                	add    %al,(%rax)
  40056f:	00 06                	add    %al,(%rsi)
  400571:	00 00                	add    %al,(%rax)
  400573:	00 04 00             	add    %al,(%rax,%rax,1)
	...
  40057e:	00 00                	add    %al,(%rax)
  400580:	50                   	push   %rax
  400581:	40                   	rex
  400582:	40 00 00             	rex add %al,(%rax)
  400585:	00 00                	add    %al,(%rax)
  400587:	00 05 00 00 00 07    	add    %al,0x7000000(%rip)        # 740058d <_end+0x6ffc51d>
	...
  400595:	00 00                	add    %al,(%rax)
  400597:	00 60 40             	add    %ah,0x40(%rax)
  40059a:	40 00 00             	rex add %al,(%rax)
  40059d:	00 00                	add    %al,(%rax)
  40059f:	00 05 00 00 00 08    	add    %al,0x8000000(%rip)        # 84005a5 <_end+0x7ffc535>
	...

Disassembly of section .rela.plt:

00000000004005b0 <.rela.plt>:
  4005b0:	00 40 40             	add    %al,0x40(%rax)
  4005b3:	00 00                	add    %al,(%rax)
  4005b5:	00 00                	add    %al,(%rax)
  4005b7:	00 07                	add    %al,(%rdi)
  4005b9:	00 00                	add    %al,(%rax)
  4005bb:	00 02                	add    %al,(%rdx)
	...
  4005c5:	00 00                	add    %al,(%rax)
  4005c7:	00 08                	add    %cl,(%rax)
  4005c9:	40                   	rex
  4005ca:	40 00 00             	rex add %al,(%rax)
  4005cd:	00 00                	add    %al,(%rax)
  4005cf:	00 07                	add    %al,(%rdi)
  4005d1:	00 00                	add    %al,(%rax)
  4005d3:	00 03                	add    %al,(%rbx)
	...
  4005dd:	00 00                	add    %al,(%rax)
  4005df:	00 10                	add    %dl,(%rax)
  4005e1:	40                   	rex
  4005e2:	40 00 00             	rex add %al,(%rax)
  4005e5:	00 00                	add    %al,(%rax)
  4005e7:	00 07                	add    %al,(%rdi)
  4005e9:	00 00                	add    %al,(%rax)
  4005eb:	00 05 00 00 00 00    	add    %al,0x0(%rip)        # 4005f1 <__abi_tag+0x275>
  4005f1:	00 00                	add    %al,(%rax)
  4005f3:	00 00                	add    %al,(%rax)
  4005f5:	00 00                	add    %al,(%rax)
  4005f7:	00 18                	add    %bl,(%rax)
  4005f9:	40                   	rex
  4005fa:	40 00 00             	rex add %al,(%rax)
  4005fd:	00 00                	add    %al,(%rax)
  4005ff:	00 07                	add    %al,(%rdi)
  400601:	00 00                	add    %al,(%rax)
  400603:	00 06                	add    %al,(%rsi)
	...

Disassembly of section .init:

0000000000401000 <_init>:
  401000:	48 83 ec 08          	sub    $0x8,%rsp
  401004:	48 8b 05 d5 2f 00 00 	mov    0x2fd5(%rip),%rax        # 403fe0 <__gmon_start__@Base>
  40100b:	48 85 c0             	test   %rax,%rax
  40100e:	74 02                	je     401012 <_init+0x12>
  401010:	ff d0                	call   *%rax
  401012:	48 83 c4 08          	add    $0x8,%rsp
  401016:	c3                   	ret

Disassembly of section .plt:

0000000000401020 <puts@plt-0x10>:
  401020:	ff 35 ca 2f 00 00    	push   0x2fca(%rip)        # 403ff0 <_GLOBAL_OFFSET_TABLE_+0x8>
  401026:	ff 25 cc 2f 00 00    	jmp    *0x2fcc(%rip)        # 403ff8 <_GLOBAL_OFFSET_TABLE_+0x10>
  40102c:	0f 1f 40 00          	nopl   0x0(%rax)

0000000000401030 <puts@plt>:
  401030:	ff 25 ca 2f 00 00    	jmp    *0x2fca(%rip)        # 404000 <puts@GLIBC_2.2.5>
  401036:	68 00 00 00 00       	push   $0x0
  40103b:	e9 e0 ff ff ff       	jmp    401020 <_init+0x20>

0000000000401040 <printf@plt>:
  401040:	ff 25 c2 2f 00 00    	jmp    *0x2fc2(%rip)        # 404008 <printf@GLIBC_2.2.5>
  401046:	68 01 00 00 00       	push   $0x1
  40104b:	e9 d0 ff ff ff       	jmp    401020 <_init+0x20>

0000000000401050 <gets@plt>:
  401050:	ff 25 ba 2f 00 00    	jmp    *0x2fba(%rip)        # 404010 <gets@GLIBC_2.2.5>
  401056:	68 02 00 00 00       	push   $0x2
  40105b:	e9 c0 ff ff ff       	jmp    401020 <_init+0x20>

0000000000401060 <setvbuf@plt>:
  401060:	ff 25 b2 2f 00 00    	jmp    *0x2fb2(%rip)        # 404018 <setvbuf@GLIBC_2.2.5>
  401066:	68 03 00 00 00       	push   $0x3
  40106b:	e9 b0 ff ff ff       	jmp    401020 <_init+0x20>

Disassembly of section .text:

0000000000401070 <_start>:
  401070:	31 ed                	xor    %ebp,%ebp
  401072:	49 89 d1             	mov    %rdx,%r9
  401075:	5e                   	pop    %rsi
  401076:	48 89 e2             	mov    %rsp,%rdx
  401079:	48 83 e4 f0          	and    $0xfffffffffffffff0,%rsp
  40107d:	50                   	push   %rax
  40107e:	54                   	push   %rsp
  40107f:	45 31 c0             	xor    %r8d,%r8d
  401082:	31 c9                	xor    %ecx,%ecx
  401084:	48 c7 c7 1d 12 40 00 	mov    $0x40121d,%rdi
  40108b:	ff 15 47 2f 00 00    	call   *0x2f47(%rip)        # 403fd8 <__libc_start_main@GLIBC_2.34>
  401091:	f4                   	hlt
  401092:	66 2e 0f 1f 84 00 00 	cs nopw 0x0(%rax,%rax,1)
  401099:	00 00 00 
  40109c:	0f 1f 40 00          	nopl   0x0(%rax)

00000000004010a0 <_dl_relocate_static_pie>:
  4010a0:	c3                   	ret
  4010a1:	66 2e 0f 1f 84 00 00 	cs nopw 0x0(%rax,%rax,1)
  4010a8:	00 00 00 
  4010ab:	0f 1f 44 00 00       	nopl   0x0(%rax,%rax,1)

00000000004010b0 <deregister_tm_clones>:
  4010b0:	b8 48 40 40 00       	mov    $0x404048,%eax
  4010b5:	48 3d 48 40 40 00    	cmp    $0x404048,%rax
  4010bb:	74 13                	je     4010d0 <deregister_tm_clones+0x20>
  4010bd:	b8 00 00 00 00       	mov    $0x0,%eax
  4010c2:	48 85 c0             	test   %rax,%rax
  4010c5:	74 09                	je     4010d0 <deregister_tm_clones+0x20>
  4010c7:	bf 48 40 40 00       	mov    $0x404048,%edi
  4010cc:	ff e0                	jmp    *%rax
  4010ce:	66 90                	xchg   %ax,%ax
  4010d0:	c3                   	ret
  4010d1:	66 66 2e 0f 1f 84 00 	data16 cs nopw 0x0(%rax,%rax,1)
  4010d8:	00 00 00 00 
  4010dc:	0f 1f 40 00          	nopl   0x0(%rax)

00000000004010e0 <register_tm_clones>:
  4010e0:	be 48 40 40 00       	mov    $0x404048,%esi
  4010e5:	48 81 ee 48 40 40 00 	sub    $0x404048,%rsi
  4010ec:	48 89 f0             	mov    %rsi,%rax
  4010ef:	48 c1 ee 3f          	shr    $0x3f,%rsi
  4010f3:	48 c1 f8 03          	sar    $0x3,%rax
  4010f7:	48 01 c6             	add    %rax,%rsi
  4010fa:	48 d1 fe             	sar    $1,%rsi
  4010fd:	74 11                	je     401110 <register_tm_clones+0x30>
  4010ff:	b8 00 00 00 00       	mov    $0x0,%eax
  401104:	48 85 c0             	test   %rax,%rax
  401107:	74 07                	je     401110 <register_tm_clones+0x30>
  401109:	bf 48 40 40 00       	mov    $0x404048,%edi
  40110e:	ff e0                	jmp    *%rax
  401110:	c3                   	ret
  401111:	66 66 2e 0f 1f 84 00 	data16 cs nopw 0x0(%rax,%rax,1)
  401118:	00 00 00 00 
  40111c:	0f 1f 40 00          	nopl   0x0(%rax)

0000000000401120 <__do_global_dtors_aux>:
  401120:	f3 0f 1e fa          	endbr64
  401124:	80 3d 3d 2f 00 00 00 	cmpb   $0x0,0x2f3d(%rip)        # 404068 <completed.0>
  40112b:	75 13                	jne    401140 <__do_global_dtors_aux+0x20>
  40112d:	55                   	push   %rbp
  40112e:	48 89 e5             	mov    %rsp,%rbp
  401131:	e8 7a ff ff ff       	call   4010b0 <deregister_tm_clones>
  401136:	c6 05 2b 2f 00 00 01 	movb   $0x1,0x2f2b(%rip)        # 404068 <completed.0>
  40113d:	5d                   	pop    %rbp
  40113e:	c3                   	ret
  40113f:	90                   	nop
  401140:	c3                   	ret
  401141:	66 66 2e 0f 1f 84 00 	data16 cs nopw 0x0(%rax,%rax,1)
  401148:	00 00 00 00 
  40114c:	0f 1f 40 00          	nopl   0x0(%rax)

0000000000401150 <frame_dummy>:
  401150:	f3 0f 1e fa          	endbr64
  401154:	eb 8a                	jmp    4010e0 <register_tm_clones>

0000000000401156 <setup>:
  401156:	55                   	push   %rbp
  401157:	48 89 e5             	mov    %rsp,%rbp
  40115a:	48 8b 05 ef 2e 00 00 	mov    0x2eef(%rip),%rax        # 404050 <stdout@GLIBC_2.2.5>
  401161:	b9 00 00 00 00       	mov    $0x0,%ecx
  401166:	ba 02 00 00 00       	mov    $0x2,%edx
  40116b:	be 00 00 00 00       	mov    $0x0,%esi
  401170:	48 89 c7             	mov    %rax,%rdi
  401173:	e8 e8 fe ff ff       	call   401060 <setvbuf@plt>
  401178:	48 8b 05 e1 2e 00 00 	mov    0x2ee1(%rip),%rax        # 404060 <stdin@GLIBC_2.2.5>
  40117f:	b9 00 00 00 00       	mov    $0x0,%ecx
  401184:	ba 02 00 00 00       	mov    $0x2,%edx
  401189:	be 00 00 00 00       	mov    $0x0,%esi
  40118e:	48 89 c7             	mov    %rax,%rdi
  401191:	e8 ca fe ff ff       	call   401060 <setvbuf@plt>
  401196:	90                   	nop
  401197:	5d                   	pop    %rbp
  401198:	c3                   	ret

0000000000401199 <FUN_00402020>:
  401199:	5f                   	pop    %rdi
  40119a:	c3                   	ret
  40119b:	48 89 c6             	mov    %rax,%rsi
  40119e:	c3                   	ret
  40119f:	5a                   	pop    %rdx
  4011a0:	c3                   	ret
  4011a1:	58                   	pop    %rax
  4011a2:	c3                   	ret
  4011a3:	90                   	nop
  4011a4:	0f 0b                	ud2

00000000004011a6 <surprise_for_you>:
  4011a6:	55                   	push   %rbp
  4011a7:	48 89 e5             	mov    %rsp,%rbp
  4011aa:	48 81 ec 90 00 00 00 	sub    $0x90,%rsp
  4011b1:	89 bd 7c ff ff ff    	mov    %edi,-0x84(%rbp)
  4011b7:	89 b5 78 ff ff ff    	mov    %esi,-0x88(%rbp)
  4011bd:	89 95 74 ff ff ff    	mov    %edx,-0x8c(%rbp)
  4011c3:	81 bd 7c ff ff ff be 	cmpl   $0xcafebabe,-0x84(%rbp)
  4011ca:	ba fe ca 
  4011cd:	75 38                	jne    401207 <surprise_for_you+0x61>
  4011cf:	81 bd 78 ff ff ff ef 	cmpl   $0xdeadbeef,-0x88(%rbp)
  4011d6:	be ad de 
  4011d9:	75 2c                	jne    401207 <surprise_for_you+0x61>
  4011db:	81 bd 74 ff ff ff ee 	cmpl   $0xc0ffee,-0x8c(%rbp)
  4011e2:	ff c0 00 
  4011e5:	75 20                	jne    401207 <surprise_for_you+0x61>
  4011e7:	48 8d 05 42 2e 00 00 	lea    0x2e42(%rip),%rax        # 404030 <flag>
  4011ee:	48 89 c6             	mov    %rax,%rsi
  4011f1:	48 8d 05 10 0e 00 00 	lea    0xe10(%rip),%rax        # 402008 <_IO_stdin_used+0x8>
  4011f8:	48 89 c7             	mov    %rax,%rdi
  4011fb:	b8 00 00 00 00       	mov    $0x0,%eax
  401200:	e8 3b fe ff ff       	call   401040 <printf@plt>
  401205:	eb 0f                	jmp    401216 <surprise_for_you+0x70>
  401207:	48 8d 05 12 0e 00 00 	lea    0xe12(%rip),%rax        # 402020 <_IO_stdin_used+0x20>
  40120e:	48 89 c7             	mov    %rax,%rdi
  401211:	e8 1a fe ff ff       	call   401030 <puts@plt>
  401216:	b8 00 00 00 00       	mov    $0x0,%eax
  40121b:	c9                   	leave
  40121c:	c3                   	ret

000000000040121d <main>:
  40121d:	55                   	push   %rbp
  40121e:	48 89 e5             	mov    %rsp,%rbp
  401221:	48 83 ec 30          	sub    $0x30,%rsp
  401225:	48 8d 05 6d ff ff ff 	lea    -0x93(%rip),%rax        # 401199 <FUN_00402020>
  40122c:	48 89 45 f8          	mov    %rax,-0x8(%rbp)
  401230:	b8 00 00 00 00       	mov    $0x0,%eax
  401235:	e8 1c ff ff ff       	call   401156 <setup>
  40123a:	48 8d 05 02 0e 00 00 	lea    0xe02(%rip),%rax        # 402043 <_IO_stdin_used+0x43>
  401241:	48 89 c7             	mov    %rax,%rdi
  401244:	b8 00 00 00 00       	mov    $0x0,%eax
  401249:	e8 f2 fd ff ff       	call   401040 <printf@plt>
  40124e:	48 8d 45 d0          	lea    -0x30(%rbp),%rax
  401252:	48 89 c7             	mov    %rax,%rdi
  401255:	e8 f6 fd ff ff       	call   401050 <gets@plt>
  40125a:	b8 00 00 00 00       	mov    $0x0,%eax
  40125f:	c9                   	leave
  401260:	c3                   	ret

Disassembly of section .fini:

0000000000401264 <_fini>:
  401264:	48 83 ec 08          	sub    $0x8,%rsp
  401268:	48 83 c4 08          	add    $0x8,%rsp
  40126c:	c3                   	ret

Disassembly of section .rodata:

0000000000402000 <_IO_stdin_used>:
  402000:	01 00                	add    %eax,(%rax)
  402002:	02 00                	add    (%rax),%al
  402004:	00 00                	add    %al,(%rax)
  402006:	00 00                	add    %al,(%rax)
  402008:	0a 48 65             	or     0x65(%rax),%cl
  40200b:	72 65                	jb     402072 <__GNU_EH_FRAME_HDR+0x12>
  40200d:	20 79 6f             	and    %bh,0x6f(%rcx)
  402010:	75 20                	jne    402032 <_IO_stdin_used+0x32>
  402012:	67 6f                	outsl  %ds:(%esi),(%dx)
  402014:	20 3a                	and    %bh,(%rdx)
  402016:	20 25 73 00 00 00    	and    %ah,0x73(%rip)        # 40208f <__GNU_EH_FRAME_HDR+0x2f>
  40201c:	00 00                	add    %al,(%rax)
  40201e:	00 00                	add    %al,(%rax)
  402020:	0a 54 72 65          	or     0x65(%rdx,%rsi,2),%dl
  402024:	73 70                	jae    402096 <__GNU_EH_FRAME_HDR+0x36>
  402026:	61                   	(bad)
  402027:	73 73                	jae    40209c <__GNU_EH_FRAME_HDR+0x3c>
  402029:	65 72 20             	gs jb  40204c <_IO_stdin_used+0x4c>
  40202c:	64 65 74 65          	fs gs je 402095 <__GNU_EH_FRAME_HDR+0x35>
  402030:	63 74 65 64          	movsxd 0x64(%rbp,%riz,2),%esi
  402034:	21 0a                	and    %ecx,(%rdx)
  402036:	5b                   	pop    %rbx
  402037:	2a 5d 20             	sub    0x20(%rbp),%bl
  40203a:	41                   	rex.B
  40203b:	42                   	rex.X
  40203c:	4f 52                	rex.WRXB push %r10
  40203e:	54                   	push   %rsp
  40203f:	49                   	rex.WB
  402040:	4e                   	rex.WRX
  402041:	47 00 57 68          	rex.RXB add %r10b,0x68(%r15)
  402045:	65 72 65             	gs jb  4020ad <__GNU_EH_FRAME_HDR+0x4d>
  402048:	20 64 6f 20          	and    %ah,0x20(%rdi,%rbp,2)
  40204c:	79 6f                	jns    4020bd <__GNU_EH_FRAME_HDR+0x5d>
  40204e:	75 20                	jne    402070 <__GNU_EH_FRAME_HDR+0x10>
  402050:	77 61                	ja     4020b3 <__GNU_EH_FRAME_HDR+0x53>
  402052:	6e                   	outsb  %ds:(%rsi),(%dx)
  402053:	74 20                	je     402075 <__GNU_EH_FRAME_HDR+0x15>
  402055:	74 6f                	je     4020c6 <__GNU_EH_FRAME_HDR+0x66>
  402057:	20 67 6f             	and    %ah,0x6f(%rdi)
  40205a:	20 74 6f 0a          	and    %dh,0xa(%rdi,%rbp,2)
  40205e:	3e                   	ds
	...

Disassembly of section .eh_frame_hdr:

0000000000402060 <__GNU_EH_FRAME_HDR>:
  402060:	01 1b                	add    %ebx,(%rbx)
  402062:	03 3b                	add    (%rbx),%edi
  402064:	44 00 00             	add    %r8b,(%rax)
  402067:	00 07                	add    %al,(%rdi)
  402069:	00 00                	add    %al,(%rax)
  40206b:	00 c0                	add    %al,%al
  40206d:	ef                   	out    %eax,(%dx)
  40206e:	ff                   	(bad)
  40206f:	ff a0 00 00 00 10    	jmp    *0x10000000(%rax)
  402075:	f0 ff                	lock (bad)
  402077:	ff 60 00             	jmp    *0x0(%rax)
  40207a:	00 00                	add    %al,(%rax)
  40207c:	40                   	rex
  40207d:	f0 ff                	lock (bad)
  40207f:	ff 8c 00 00 00 f6 f0 	decl   -0xf0a0000(%rax,%rax,1)
  402086:	ff                   	(bad)
  402087:	ff c8                	dec    %eax
  402089:	00 00                	add    %al,(%rax)
  40208b:	00 39                	add    %bh,(%rcx)
  40208d:	f1                   	int1
  40208e:	ff                   	(bad)
  40208f:	ff                   	ljmp   (bad)
  402090:	e8 00 00 00 46       	call   46402095 <_end+0x45ffe025>
  402095:	f1                   	int1
  402096:	ff                   	(bad)
  402097:	ff                   	(bad)
  402098:	fc                   	cld
  402099:	00 00                	add    %al,(%rax)
  40209b:	00 bd f1 ff ff 1c    	add    %bh,0x1cfffff1(%rbp)
  4020a1:	01 00                	add    %eax,(%rax)
	...

Disassembly of section .eh_frame:

00000000004020a8 <__FRAME_END__-0xf4>:
  4020a8:	14 00                	adc    $0x0,%al
  4020aa:	00 00                	add    %al,(%rax)
  4020ac:	00 00                	add    %al,(%rax)
  4020ae:	00 00                	add    %al,(%rax)
  4020b0:	01 7a 52             	add    %edi,0x52(%rdx)
  4020b3:	00 01                	add    %al,(%rcx)
  4020b5:	78 10                	js     4020c7 <__GNU_EH_FRAME_HDR+0x67>
  4020b7:	01 1b                	add    %ebx,(%rbx)
  4020b9:	0c 07                	or     $0x7,%al
  4020bb:	08 90 01 07 10 10    	or     %dl,0x10100701(%rax)
  4020c1:	00 00                	add    %al,(%rax)
  4020c3:	00 1c 00             	add    %bl,(%rax,%rax,1)
  4020c6:	00 00                	add    %al,(%rax)
  4020c8:	a8 ef                	test   $0xef,%al
  4020ca:	ff                   	(bad)
  4020cb:	ff 22                	jmp    *(%rdx)
  4020cd:	00 00                	add    %al,(%rax)
  4020cf:	00 00                	add    %al,(%rax)
  4020d1:	00 00                	add    %al,(%rax)
  4020d3:	00 14 00             	add    %dl,(%rax,%rax,1)
  4020d6:	00 00                	add    %al,(%rax)
  4020d8:	00 00                	add    %al,(%rax)
  4020da:	00 00                	add    %al,(%rax)
  4020dc:	01 7a 52             	add    %edi,0x52(%rdx)
  4020df:	00 01                	add    %al,(%rcx)
  4020e1:	78 10                	js     4020f3 <__GNU_EH_FRAME_HDR+0x93>
  4020e3:	01 1b                	add    %ebx,(%rbx)
  4020e5:	0c 07                	or     $0x7,%al
  4020e7:	08 90 01 00 00 10    	or     %dl,0x10000001(%rax)
  4020ed:	00 00                	add    %al,(%rax)
  4020ef:	00 1c 00             	add    %bl,(%rax,%rax,1)
  4020f2:	00 00                	add    %al,(%rax)
  4020f4:	ac                   	lods   %ds:(%rsi),%al
  4020f5:	ef                   	out    %eax,(%dx)
  4020f6:	ff                   	(bad)
  4020f7:	ff 01                	incl   (%rcx)
  4020f9:	00 00                	add    %al,(%rax)
  4020fb:	00 00                	add    %al,(%rax)
  4020fd:	00 00                	add    %al,(%rax)
  4020ff:	00 24 00             	add    %ah,(%rax,%rax,1)
  402102:	00 00                	add    %al,(%rax)
  402104:	30 00                	xor    %al,(%rax)
  402106:	00 00                	add    %al,(%rax)
  402108:	18 ef                	sbb    %ch,%bh
  40210a:	ff                   	(bad)
  40210b:	ff 50 00             	call   *0x0(%rax)
  40210e:	00 00                	add    %al,(%rax)
  402110:	00 0e                	add    %cl,(%rsi)
  402112:	10 46 0e             	adc    %al,0xe(%rsi)
  402115:	18 4a 0f             	sbb    %cl,0xf(%rdx)
  402118:	0b 77 08             	or     0x8(%rdi),%esi
  40211b:	80 00 3f             	addb   $0x3f,(%rax)
  40211e:	1a 3b                	sbb    (%rbx),%bh
  402120:	2a 33                	sub    (%rbx),%dh
  402122:	24 22                	and    $0x22,%al
  402124:	00 00                	add    %al,(%rax)
  402126:	00 00                	add    %al,(%rax)
  402128:	1c 00                	sbb    $0x0,%al
  40212a:	00 00                	add    %al,(%rax)
  40212c:	58                   	pop    %rax
  40212d:	00 00                	add    %al,(%rax)
  40212f:	00 26                	add    %ah,(%rsi)
  402131:	f0 ff                	lock (bad)
  402133:	ff 43 00             	incl   0x0(%rbx)
  402136:	00 00                	add    %al,(%rax)
  402138:	00 41 0e             	add    %al,0xe(%rcx)
  40213b:	10 86 02 43 0d 06    	adc    %al,0x60d4302(%rsi)
  402141:	7e 0c                	jle    40214f <__GNU_EH_FRAME_HDR+0xef>
  402143:	07                   	(bad)
  402144:	08 00                	or     %al,(%rax)
  402146:	00 00                	add    %al,(%rax)
  402148:	10 00                	adc    %al,(%rax)
  40214a:	00 00                	add    %al,(%rax)
  40214c:	78 00                	js     40214e <__GNU_EH_FRAME_HDR+0xee>
  40214e:	00 00                	add    %al,(%rax)
  402150:	49                   	rex.WB
  402151:	f0 ff                	lock (bad)
  402153:	ff 0d 00 00 00 00    	decl   0x0(%rip)        # 402159 <__GNU_EH_FRAME_HDR+0xf9>
  402159:	00 00                	add    %al,(%rax)
  40215b:	00 1c 00             	add    %bl,(%rax,%rax,1)
  40215e:	00 00                	add    %al,(%rax)
  402160:	8c 00                	mov    %es,(%rax)
  402162:	00 00                	add    %al,(%rax)
  402164:	42                   	rex.X
  402165:	f0 ff                	lock (bad)
  402167:	ff 77 00             	push   0x0(%rdi)
  40216a:	00 00                	add    %al,(%rax)
  40216c:	00 41 0e             	add    %al,0xe(%rcx)
  40216f:	10 86 02 43 0d 06    	adc    %al,0x60d4302(%rsi)
  402175:	02 72 0c             	add    0xc(%rdx),%dh
  402178:	07                   	(bad)
  402179:	08 00                	or     %al,(%rax)
  40217b:	00 1c 00             	add    %bl,(%rax,%rax,1)
  40217e:	00 00                	add    %al,(%rax)
  402180:	ac                   	lods   %ds:(%rsi),%al
  402181:	00 00                	add    %al,(%rax)
  402183:	00 99 f0 ff ff 44    	add    %bl,0x44fffff0(%rcx)
  402189:	00 00                	add    %al,(%rax)
  40218b:	00 00                	add    %al,(%rax)
  40218d:	41 0e                	rex.B (bad)
  40218f:	10 86 02 43 0d 06    	adc    %al,0x60d4302(%rsi)
  402195:	7f 0c                	jg     4021a3 <__FRAME_END__+0x7>
  402197:	07                   	(bad)
  402198:	08 00                	or     %al,(%rax)
	...

000000000040219c <__FRAME_END__>:
  40219c:	00 00                	add    %al,(%rax)
	...

Disassembly of section .init_array:

0000000000403df8 <__frame_dummy_init_array_entry>:
  403df8:	50                   	push   %rax
  403df9:	11 40 00             	adc    %eax,0x0(%rax)
  403dfc:	00 00                	add    %al,(%rax)
	...

Disassembly of section .fini_array:

0000000000403e00 <__do_global_dtors_aux_fini_array_entry>:
  403e00:	20 11                	and    %dl,(%rcx)
  403e02:	40 00 00             	rex add %al,(%rax)
  403e05:	00 00                	add    %al,(%rax)
	...

Disassembly of section .dynamic:

0000000000403e08 <_DYNAMIC>:
  403e08:	01 00                	add    %eax,(%rax)
  403e0a:	00 00                	add    %al,(%rax)
  403e0c:	00 00                	add    %al,(%rax)
  403e0e:	00 00                	add    %al,(%rax)
  403e10:	39 00                	cmp    %eax,(%rax)
  403e12:	00 00                	add    %al,(%rax)
  403e14:	00 00                	add    %al,(%rax)
  403e16:	00 00                	add    %al,(%rax)
  403e18:	0c 00                	or     $0x0,%al
  403e1a:	00 00                	add    %al,(%rax)
  403e1c:	00 00                	add    %al,(%rax)
  403e1e:	00 00                	add    %al,(%rax)
  403e20:	00 10                	add    %dl,(%rax)
  403e22:	40 00 00             	rex add %al,(%rax)
  403e25:	00 00                	add    %al,(%rax)
  403e27:	00 0d 00 00 00 00    	add    %cl,0x0(%rip)        # 403e2d <_DYNAMIC+0x25>
  403e2d:	00 00                	add    %al,(%rax)
  403e2f:	00 64 12 40          	add    %ah,0x40(%rdx,%rdx,1)
  403e33:	00 00                	add    %al,(%rax)
  403e35:	00 00                	add    %al,(%rax)
  403e37:	00 19                	add    %bl,(%rcx)
  403e39:	00 00                	add    %al,(%rax)
  403e3b:	00 00                	add    %al,(%rax)
  403e3d:	00 00                	add    %al,(%rax)
  403e3f:	00 f8                	add    %bh,%al
  403e41:	3d 40 00 00 00       	cmp    $0x40,%eax
  403e46:	00 00                	add    %al,(%rax)
  403e48:	1b 00                	sbb    (%rax),%eax
  403e4a:	00 00                	add    %al,(%rax)
  403e4c:	00 00                	add    %al,(%rax)
  403e4e:	00 00                	add    %al,(%rax)
  403e50:	08 00                	or     %al,(%rax)
  403e52:	00 00                	add    %al,(%rax)
  403e54:	00 00                	add    %al,(%rax)
  403e56:	00 00                	add    %al,(%rax)
  403e58:	1a 00                	sbb    (%rax),%al
  403e5a:	00 00                	add    %al,(%rax)
  403e5c:	00 00                	add    %al,(%rax)
  403e5e:	00 00                	add    %al,(%rax)
  403e60:	00 3e                	add    %bh,(%rsi)
  403e62:	40 00 00             	rex add %al,(%rax)
  403e65:	00 00                	add    %al,(%rax)
  403e67:	00 1c 00             	add    %bl,(%rax,%rax,1)
  403e6a:	00 00                	add    %al,(%rax)
  403e6c:	00 00                	add    %al,(%rax)
  403e6e:	00 00                	add    %al,(%rax)
  403e70:	08 00                	or     %al,(%rax)
  403e72:	00 00                	add    %al,(%rax)
  403e74:	00 00                	add    %al,(%rax)
  403e76:	00 00                	add    %al,(%rax)
  403e78:	f5                   	cmc
  403e79:	fe                   	(bad)
  403e7a:	ff 6f 00             	ljmp   *0x0(%rdi)
  403e7d:	00 00                	add    %al,(%rax)
  403e7f:	00 a0 03 40 00 00    	add    %ah,0x4003(%rax)
  403e85:	00 00                	add    %al,(%rax)
  403e87:	00 05 00 00 00 00    	add    %al,0x0(%rip)        # 403e8d <_DYNAMIC+0x85>
  403e8d:	00 00                	add    %al,(%rax)
  403e8f:	00 a0 04 40 00 00    	add    %ah,0x4004(%rax)
  403e95:	00 00                	add    %al,(%rax)
  403e97:	00 06                	add    %al,(%rsi)
  403e99:	00 00                	add    %al,(%rax)
  403e9b:	00 00                	add    %al,(%rax)
  403e9d:	00 00                	add    %al,(%rax)
  403e9f:	00 c8                	add    %cl,%al
  403ea1:	03 40 00             	add    0x0(%rax),%eax
  403ea4:	00 00                	add    %al,(%rax)
  403ea6:	00 00                	add    %al,(%rax)
  403ea8:	0a 00                	or     (%rax),%al
  403eaa:	00 00                	add    %al,(%rax)
  403eac:	00 00                	add    %al,(%rax)
  403eae:	00 00                	add    %al,(%rax)
  403eb0:	69 00 00 00 00 00    	imul   $0x0,(%rax),%eax
  403eb6:	00 00                	add    %al,(%rax)
  403eb8:	0b 00                	or     (%rax),%eax
  403eba:	00 00                	add    %al,(%rax)
  403ebc:	00 00                	add    %al,(%rax)
  403ebe:	00 00                	add    %al,(%rax)
  403ec0:	18 00                	sbb    %al,(%rax)
  403ec2:	00 00                	add    %al,(%rax)
  403ec4:	00 00                	add    %al,(%rax)
  403ec6:	00 00                	add    %al,(%rax)
  403ec8:	15 00 00 00 00       	adc    $0x0,%eax
	...
  403ed5:	00 00                	add    %al,(%rax)
  403ed7:	00 03                	add    %al,(%rbx)
  403ed9:	00 00                	add    %al,(%rax)
  403edb:	00 00                	add    %al,(%rax)
  403edd:	00 00                	add    %al,(%rax)
  403edf:	00 e8                	add    %ch,%al
  403ee1:	3f                   	(bad)
  403ee2:	40 00 00             	rex add %al,(%rax)
  403ee5:	00 00                	add    %al,(%rax)
  403ee7:	00 02                	add    %al,(%rdx)
  403ee9:	00 00                	add    %al,(%rax)
  403eeb:	00 00                	add    %al,(%rax)
  403eed:	00 00                	add    %al,(%rax)
  403eef:	00 60 00             	add    %ah,0x0(%rax)
  403ef2:	00 00                	add    %al,(%rax)
  403ef4:	00 00                	add    %al,(%rax)
  403ef6:	00 00                	add    %al,(%rax)
  403ef8:	14 00                	adc    $0x0,%al
  403efa:	00 00                	add    %al,(%rax)
  403efc:	00 00                	add    %al,(%rax)
  403efe:	00 00                	add    %al,(%rax)
  403f00:	07                   	(bad)
  403f01:	00 00                	add    %al,(%rax)
  403f03:	00 00                	add    %al,(%rax)
  403f05:	00 00                	add    %al,(%rax)
  403f07:	00 17                	add    %dl,(%rdi)
  403f09:	00 00                	add    %al,(%rax)
  403f0b:	00 00                	add    %al,(%rax)
  403f0d:	00 00                	add    %al,(%rax)
  403f0f:	00 b0 05 40 00 00    	add    %dh,0x4005(%rax)
  403f15:	00 00                	add    %al,(%rax)
  403f17:	00 07                	add    %al,(%rdi)
  403f19:	00 00                	add    %al,(%rax)
  403f1b:	00 00                	add    %al,(%rax)
  403f1d:	00 00                	add    %al,(%rax)
  403f1f:	00 50 05             	add    %dl,0x5(%rax)
  403f22:	40 00 00             	rex add %al,(%rax)
  403f25:	00 00                	add    %al,(%rax)
  403f27:	00 08                	add    %cl,(%rax)
  403f29:	00 00                	add    %al,(%rax)
  403f2b:	00 00                	add    %al,(%rax)
  403f2d:	00 00                	add    %al,(%rax)
  403f2f:	00 60 00             	add    %ah,0x0(%rax)
  403f32:	00 00                	add    %al,(%rax)
  403f34:	00 00                	add    %al,(%rax)
  403f36:	00 00                	add    %al,(%rax)
  403f38:	09 00                	or     %eax,(%rax)
  403f3a:	00 00                	add    %al,(%rax)
  403f3c:	00 00                	add    %al,(%rax)
  403f3e:	00 00                	add    %al,(%rax)
  403f40:	18 00                	sbb    %al,(%rax)
  403f42:	00 00                	add    %al,(%rax)
  403f44:	00 00                	add    %al,(%rax)
  403f46:	00 00                	add    %al,(%rax)
  403f48:	fe                   	(bad)
  403f49:	ff                   	(bad)
  403f4a:	ff 6f 00             	ljmp   *0x0(%rdi)
  403f4d:	00 00                	add    %al,(%rax)
  403f4f:	00 20                	add    %ah,(%rax)
  403f51:	05 40 00 00 00       	add    $0x40,%eax
  403f56:	00 00                	add    %al,(%rax)
  403f58:	ff                   	(bad)
  403f59:	ff                   	(bad)
  403f5a:	ff 6f 00             	ljmp   *0x0(%rdi)
  403f5d:	00 00                	add    %al,(%rax)
  403f5f:	00 01                	add    %al,(%rcx)
  403f61:	00 00                	add    %al,(%rax)
  403f63:	00 00                	add    %al,(%rax)
  403f65:	00 00                	add    %al,(%rax)
  403f67:	00 f0                	add    %dh,%al
  403f69:	ff                   	(bad)
  403f6a:	ff 6f 00             	ljmp   *0x0(%rdi)
  403f6d:	00 00                	add    %al,(%rax)
  403f6f:	00 0a                	add    %cl,(%rdx)
  403f71:	05 40 00 00 00       	add    $0x40,%eax
	...

Disassembly of section .got:

0000000000403fd8 <.got>:
	...

Disassembly of section .got.plt:

0000000000403fe8 <_GLOBAL_OFFSET_TABLE_>:
  403fe8:	08 3e                	or     %bh,(%rsi)
  403fea:	40 00 00             	rex add %al,(%rax)
	...
  403ffd:	00 00                	add    %al,(%rax)
  403fff:	00 36                	add    %dh,(%rsi)
  404001:	10 40 00             	adc    %al,0x0(%rax)
  404004:	00 00                	add    %al,(%rax)
  404006:	00 00                	add    %al,(%rax)
  404008:	46 10 40 00          	rex.RX adc %r8b,0x0(%rax)
  40400c:	00 00                	add    %al,(%rax)
  40400e:	00 00                	add    %al,(%rax)
  404010:	56                   	push   %rsi
  404011:	10 40 00             	adc    %al,0x0(%rax)
  404014:	00 00                	add    %al,(%rax)
  404016:	00 00                	add    %al,(%rax)
  404018:	66 10 40 00          	data16 adc %al,0x0(%rax)
  40401c:	00 00                	add    %al,(%rax)
	...

Disassembly of section .data:

0000000000404020 <__data_start>:
	...

0000000000404028 <__dso_handle>:
	...

0000000000404030 <flag>:
  404030:	49                   	rex.WB
  404031:	43 54                	rex.XB push %r12
  404033:	46 32 35 7b 66 61 6b 	rex.RX xor 0x6b61667b(%rip),%r14b        # 6ba1a6b5 <_end+0x6b616645>
  40403a:	65 5f                	gs pop %rdi
  40403c:	66 6c                	data16 insb (%dx),%es:(%rdi)
  40403e:	61                   	(bad)
  40403f:	67 7d 00             	addr32 jge 404042 <_edata>

Disassembly of section .comment:

0000000000000000 <.comment>:
   0:	47                   	rex.RXB
   1:	43                   	rex.XB
   2:	43 3a 20             	rex.XB cmp (%r8),%spl
   5:	28 44 65 62          	sub    %al,0x62(%rbp,%riz,2)
   9:	69 61 6e 20 31 34 2e 	imul   $0x2e343120,0x6e(%rcx),%esp
  10:	32 2e                	xor    (%rsi),%ch
  12:	30 2d 31 39 29 20    	xor    %ch,0x20293931(%rip)        # 20293949 <_end+0x1fe8f8d9>
  18:	31 34 2e             	xor    %esi,(%rsi,%rbp,1)
  1b:	32 2e                	xor    (%rsi),%ch
  1d:	30 00                	xor    %al,(%rax)
`;

