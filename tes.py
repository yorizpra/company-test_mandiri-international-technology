def segitiga_kebalik(bintang):
    if bintang % 2 == 0:
        bintang += 1
    rows = (bintang + 1) // 2
    for i in range(rows, 0, -1):
        print(" " * (rows - i), end="")
        print("*" * (i * 2 - 1))

bintang = int(input("Masukkan jumlah bintang: "))
segitiga_kebalik(bintang)