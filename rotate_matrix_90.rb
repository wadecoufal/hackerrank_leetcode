TEST1 = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

TEST2 = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
]

# space: O(n)
# time: O()
def rotate(matrix)

  new_matrix = Array.new(matrix.length) {Array.new}
  mod = matrix.length - 1

  matrix.length.times do |row|
    matrix.length.times do |col|
      val = matrix[row][col]
      new_row = col
      new_col = row + (mod - row*2)
      new_matrix[new_row][new_col] = val
    end
  end

  new_matrix
end

# rotate outer square first, then each inner square
def rotate_inplace(matrix)

  # 6 - 3
  # 5 - 3
  # 4 - 2
  # 3 - 2
  # 2 - 1
  # 1 - 1

  num_squares = (matrix.length + 1) / 2

  num_squares.times do |row|
    curr_row = row
    (row...matrix.length - row - 1).each do |col|
      curr_col = col
      4.times do

      end
    end
  end

end

p rotate(TEST1)
p rotate(TEST2)
