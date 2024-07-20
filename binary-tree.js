/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */
  minDepth() {
    if (!this.root) return 0;

    function minDepth(node) {
      if (node.left === null && node.right === null) {
        return 1;
      }
      if (node.left === null) {
        return minDepth(node.right) + 1;
      }
      if (node.right === null) {
        return minDepth(node.left) + 1;
      }

      return Math.min(minDepth(node.left), minDepth(node.right)) + 1;
    }
    return minDepth(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    function maxDepth(node) {
      if (node.left === null && node.right === null) {
        return 1;
      }
      if (node.left === null) {
        return maxDepth(node.right) + 1;
      }
      if (node.right === null) {
        return maxDepth(node.left) + 1;
      }

      return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
    }
    return maxDepth(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = 0;

    function findSum(node) {
      if (node === null) {
        return 0;
      }

      const leftSum = findSum(node.left);
      const rightSum = findSum(node.right);

      result = Math.max(result, node.val + leftSum + rightSum);

      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }
    findSum(this.root);
    return result;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let result = null;

    function findNextLarger(node) {
      if (node === null) {
        return;
      }

      if (node.val > lowerBound) {
        result = node.val;
      }

      findNextLarger(node.left);
      findNextLarger(node.right);
    }
    findNextLarger(this.root);
    return result;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
