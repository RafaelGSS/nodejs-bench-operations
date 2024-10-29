## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|115,249,326|57690854|
|(short string) (true) String#slice and strict comparison|55,927,016|27964966|
|(long string) (true) String#startsWith|63,453,631|31732077|
|(long string) (true) String#slice and strict comparison|50,743,497|25371765|
|(short string) (false) String#startsWith|93,079,242|46539858|
|(short string) (false) String#slice and strict comparison|56,032,855|28018818|
|(long string) (false) String#startsWith|83,126,691|41569899|
|(long string) (false) String#slice and strict comparison|50,867,582|25434238|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:01:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":115249326.40023306,"samples":57690854},{"name":"(short string) (true) String#slice and strict comparison","opsSec":55927016.86017318,"samples":27964966},{"name":"(long string) (true) String#startsWith","opsSec":63453631.73806341,"samples":31732077},{"name":"(long string) (true) String#slice and strict comparison","opsSec":50743497.82862237,"samples":25371765},{"name":"(short string) (false) String#startsWith","opsSec":93079242.97128722,"samples":46539858},{"name":"(short string) (false) String#slice and strict comparison","opsSec":56032855.27678779,"samples":28018818},{"name":"(long string) (false) String#startsWith","opsSec":83126691.58079185,"samples":41569899},{"name":"(long string) (false) String#slice and strict comparison","opsSec":50867582.460046515,"samples":25434238}]}-->
