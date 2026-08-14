'use client';

import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SearchModal from '@/components/ui/SearchModal';
import ToolDetailModal from '@/components/ui/ToolDetailModal';

export default function ClientLayoutWrapper({ children }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedToolModal, setSelectedToolModal] = useState(null);

  return (
    <>
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      <main style={{ flex: 1 }}>{children}</main>

      <Footer />

      {/* Global Instant Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectTool={(tool) => setSelectedToolModal(tool)}
      />

      {/* Global Tool Detail Modal */}
      {selectedToolModal && (
        <ToolDetailModal
          tool={selectedToolModal}
          onClose={() => setSelectedToolModal(null)}
        />
      )}
    </>
  );
}
