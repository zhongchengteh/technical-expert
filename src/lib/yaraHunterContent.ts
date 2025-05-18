
export const YARA_HUNTER_TITLE = "Phone Virus - Malicious Software Yara Rules";

export const STATIC_ANALYSIS_STRINGS_OUTPUT = `!This program cannot be run in DOS mode.
xRich
UPX0
UPX1
.rsrc
4.21
UPX!
kxvx+
g&0K(u(H,^
\`{L%
#3!L
%tgk
:~|!
pR0r
t8T)
alw%W*@s
CHjM5
5<      u2z
3'+8U
<M'|l
RjgF
j-g}
6x. 
Cr/p0
' R 
wo_7
jWS]l
t%j@
1@n!
l@Y2
) cI
%hYY
bVPW
qDYY
Y_^[
wm d
u"!S
3 2y
?t x1E
>csm
(y,V
SVWpP
12Pa2l
 YYC
!28s
Genu
5ineIV
ntel
uCF%
t#=\`
ty%O
U3T$
%dddl!0
$ ,dddd(
4HddddD
>@d\`
DFFF
Lddddt
o<t*
|h\\J<5M
  +(_)%
|_?__| 
'_ \\
==+|
:+.__/|_|\\ 
elcome to the YaraRules0x100 cha
llenge!^S.,,
l./(%a
.*Z('
,*%%#(
&@%'
Q       #wp
'%&@@Yz
?!  ,,
*/(/
  .ll
(2&,
*lX 
NtQuery
InformationProcess/
eMaWeQ 
b_]T
f[i%
O;eCPgo
asYP
wrEn%
%wm,
cYeOt
e+p_-!
b3mC
;eCk)i\\
qnEg[
meQt) 
N; ke
o-G)
PkDOKz
w#d4|
W%ws %d
okITOo
7SoX
;DxAIk
z5nIOn?
iUu+
-KfL
9/(/x
n1Mx
Sci1s
        7Boci
 }%M{
CM;l
pEs/
Unknown excep
bad alloc
rray new s
PlacwG4
P ;G
8K _
GCTL#&
.text$div
.idata$5
.00cfg
RT$XCA#
Cg84'r
=sx*
voltm
zzzdbZ
 HG&l
tc$IA
3b:p
.rsrc$0q
d'Kv
a+!U
.?AVbad_
@std@9
_new_&
%_type_info[
{A|\`
wM#{
N0GCS7
7gL-
.d+,/
27H(
HGHW
GSOXT!
P*#r
p?aN
u]ap
GetCurrent\`Id
Terminate
&ExitCo9
Cre"Th
eModuleFileNameWR
Handl
MultiByteToWO
ideChar
leep
=932Firstc
{ONex
Startup
Y SetUnh
IsDebuggerP
InitializeSListHea
oystemTimeAsXe
nceCoun
EComm
(kMutex
WaitFor
SingleObject\`LastErro
Closez|
Activ
utput
=Strt
Toolhelp3x
2Snapsho
.ur\`es1
LookupPriv
geVal
AdjustTokH
atoi
free
newh
0X_configt
n_6us
atherr
#seh_fil
_exle
3-hi
"_on _tabb
_r/vv
eg3er_z_{Iw
backRcrt
ontrolfp_
wH_win
main
U_lV
_app_
Xde_argv
,tenvironm
9t_f
__st
on_vsp^tfK_p>
Delet
SolidBrush
aToA
?Desk
Wind>
Load
ageBo
Tran
Rmx7\`
sZEndDPog
@Param
Show
Draw
spatch
ivDefd
PostQuit
rClas
^_des
N-py
 Cxx
        /
9x@.re
XPTPSW
<?xml version='1.0' encoding='UTF-8' standalone='yes'?>
<assembly xmlns='urn:schemas-microsoft-com:asm.v1' manifestVersion='1.0'>
  <trustInfo xmlns="urn:schemas-microsoft-com:asm.v3">
    <security>
      <requestedPrivileges>
        <requestedExecutionLevel level='asInvoker' uiAccess='false' />
      </requestedPrivileges>
    </security>
  </trustInfo>
</assembly>
ADVAPI32.dll
api-ms-win-crt-convert-l1-1-0.dll
api-ms-win-crt-heap-l1-1-0.dll
api-ms-win-crt-locale-l1-1-0.dll
api-ms-win-crt-math-l1-1-0.dll
api-ms-win-crt-runtime-l1-1-0.dll
api-ms-win-crt-stdio-l1-1-0.dll
GDI32.dll
KERNEL32.DLL
SHELL32.dll
USER32.dll
VCRUNTIME140.dll
OpenProcessToken
atoi
free
_configthreadlocale
__setusermatherr
exit
_set_fmode
TextOutW
ExitProcess
GetProcAddress
LoadLibraryA
VirtualProtect
CommandLineToArgvW
FillRect
memset
b3\`5d5l5`;

export const TEST_MALICIOUS_STRING_OPTIONS = [
  { id: "s1", label: "llenge!^S.,," },
  { id: "s2", label: "Startup" },
  { id: "s3", label: "UPX0" },
  { id: "s4", label: "UPX1" },
  { id: "s5", label: "IsDebuggerP" },
  { id: "s6", label: "LookupPri" },
  { id: "s7", label: "KERNEL32.DLL" },
  { id: "s8", label: "api-ms-win-crt-runtime-l1-1-0.dll" },
  { id: "s9", label: "Wind>" },
  { id: "s10", label: "llenge" },
];

export const CORRECT_YARA_STRINGS_IDENTIFIERS = ["llenge", "Startup", "UPX0", "IsDebuggerP", "LookupPri"];
// We'll map these to the actual labels for checking:
// $a = "llenge"
// $e = "Startup"
// $b = "UPX0"
// $c = "IsDebuggerP"
// $g = "LookupPri"
export const CORRECT_YARA_STRING_SELECTIONS_LABELS = [
  "llenge", // s10 (maps to $a)
  "Startup", // s2 (maps to $e)
  "UPX0", // s3 (maps to $b)
  "IsDebuggerP", // s5 (maps to $c)
  "LookupPri" // s6 (maps to $g)
];


export const TEST_MALICIOUS_CONDITION_OPTIONS = [
  { id: "c1", label: "$a and $e and $c and 1 of ($b,$g)" },
  { id: "c2", label: "2 of ($b, $g) and ($a or $e)" },
  { id: "c3", label: "$c and 2 of ($a, $b, $e, $g)" },
  { id: "c4", label: "4 of ($a, $b, $c, $e, $g)" },
];
export const CORRECT_YARA_CONDITION_ID = "c1";

export const CORRECT_YARA_RULE_SCRIPT = `rule pico{
    strings:
      $a = "llenge" wide ascii
      $e = "Startup" wide ascii
      $b = "UPX0" wide ascii
      $c = "IsDebuggerP" wide ascii
      $g = "LookupPri" wide ascii
     condition:
        $a and $e and $c and 1 of ($b,$g)
}`;

export const YARA_SUCCESS_OUTPUT = `:::::

Status: Passed
Congrats! Here is your flag: picoCTF{yara_rul35_r0ckzzz_12a4da12}

:::::
[⚠️] Malicious activity pattern detected by system.`;

export const YARA_FAILURE_OUTPUT = `:::::

Status: Failed
False Negatives Check: Testcase failed. Your rule generated a false negative.
False Positives Check: Testcases passed!
Stats: 61 testcase(s) passed. 1 failed. 2 testcase(s) unchecked. 64 total testcases.
Pass all the testcases to get the flag.

:::::
[!] Exploit attempt failed. The program did not behave as expected.`;

